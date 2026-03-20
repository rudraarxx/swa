/**
 * Utility to convert Google Drive share links to direct download/view links.
 * Normal share link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Direct link: https://lh3.googleusercontent.com/d/FILE_ID
 * Or: https://drive.google.com/uc?export=view&id=FILE_ID
 */
export function getDriveDirectLink(url: string): string {
  if (!url) return "";

  // Check if it's a Google Drive link
  if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/([^/]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      // This format works well for embedding in img tags
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  return url;
}
