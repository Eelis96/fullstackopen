# Uuden muistiinpanon luominen – sekvenssikaavio

Kaavio kuvaa, mitä tapahtuu, kun käyttäjä kirjoittaa tekstikenttään ja painaa "tallenna" sivulla `https://studies.cs.helsinki.fi/exampleapp/notes`.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Käyttäjä kirjoittaa tekstikenttään ja painaa "tallenna"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Palvelin tallentaa uuden muistiinpanon muistiin
    server-->>browser: 302 Redirect → /exampleapp/notes
    deactivate server

    Note over browser: Selain seuraa uudelleenohjauksen automaattisesti (Post/Redirect/Get)

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML-dokumentti
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS-tiedosto
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript-tiedosto
    deactivate server

    Note right of browser: Selain suorittaa JavaScript-koodin, joka hakee päivitetyn JSON-datan

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "käyttäjän muistiinpano", "date": "2024-1-1" }, ... ]
    deactivate server

    Note right of browser: Selain renderöi muistiinpanot – uusi muistiinpano näkyy listassa
```
