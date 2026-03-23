import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get("id");

  if (!fileId) {
    return new NextResponse("Missing file ID", { status: 400 });
  }

  try {
    // We use the thumbnail API because it's fast and reliable for previews
    const googleDriveUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
    
    const response = await fetch(googleDriveUrl, {
      // Follow redirects on the server
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      return new NextResponse("Failed to fetch image from Google Drive", { status: response.status });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const body = await response.arrayBuffer();

    return new NextResponse(body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Error proxying Google Drive image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
