# MongoDB CRUD Operations

Database: `contact`  
Collection: `contactlist`

## Run

Start MongoDB locally, then run:

```sh
mongosh "mongodb://user:password@localhost:27017" < contact-crud.mongodb.js
```

The script:

1. Creates/uses the `contact` database.
2. Creates the `contactlist` collection.
3. Inserts the required contacts.
4. Displays all contacts.
5. Displays one contact by ID.
6. Displays contacts with `age > 18`.
7. Displays contacts with `age > 18` and first name containing `ah`.
8. Updates `Kefi Seif` to `Kefi Anis`.
9. Deletes contacts aged under `5`.
10. Displays the final contacts list.

## Screenshot Placeholders

### 1. Insert Documents

Add screenshot here.

### 2. Display All Contacts

Add screenshot here.

### 3. Display One Contact By ID

Add screenshot here.

### 4. Display Contacts With Age Greater Than 18

Add screenshot here.

### 5. Display Contacts With Age Greater Than 18 And Name Containing "ah"

Add screenshot here.

### 6. Update Kefi Seif To Kefi Anis

Add screenshot here.

### 7. Delete Contacts Aged Under 5

Add screenshot here.

### 8. Final Contacts List

Add screenshot here.
