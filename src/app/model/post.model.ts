export interface Post {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {
      "rendered": string
    },
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "type": string,
    "link": string,
    "title": {
      "rendered": string
    },
    "content": {
      "rendered": string,
      "protected": boolean
    },
    "excerpt": {
      "rendered": string,
      "protected": boolean
    },
    "author": number,
    "featured_media": number,
    "comment_status": string,
    "ping_status": string,
    "sticky": boolean,
    "format": string,
    "meta": {},
    "categories": [number],
    "tags": [string],
    "better_featured_image": {
      "id": number,
      "alt_text": string,
      "caption": string,
      "description": string,
      "media_type": string,
      "media_details": {},
      "image_meta": {},
      "post": number,
      "source_url": string
    },
    "_links": {}
}