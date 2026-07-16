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

## Screenshots

### 1. Insert Documents

![Insert Documents](screenhots/1.png)

### 2. Display All Contacts

![Display All Contacts](screenhots/2.png)

### 3. Display One Contact By ID

![Display One Contact By ID](screenhots/3.png)

### 4. Display Contacts With Age Greater Than 18

![Display Contacts With Age Greater Than 18](screenhots/4.png)

### 5. Display Contacts With Age Greater Than 18 And Name Containing "ah"

![Display Contacts With Age Greater Than 18 And Name Containing Ah](screenhots/5.png)

### 6. Update, Delete, And Final Contacts List

![Update Delete And Final Contacts List](screenhots/6.png)
