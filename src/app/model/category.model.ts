export interface Category {
    "id":	number,
    "count":	number,
    "description": string,
    "link": string,
    "name": string,
    "slug": string,
    "taxonomy": string,
    "parent": number,
    "meta": {}	
    "_links": {
        "self": {
            "0": {
                "href": string
            }	
        }
        "collection": {	
            "0": {
                "href": string
            }   
        }
        "about": {
            "0": {
                "href": string
            }	
        }	
        "wp:post_type": {
            "0": {
                "href": string
            }
        }
        "curies": {
            "0": {
                "name": string,
                "href": string,
                "templated": string
            }
        }	
    }   
}