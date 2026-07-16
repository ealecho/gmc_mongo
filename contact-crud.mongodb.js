use('contact');

db.contactlist.drop();

db.createCollection('contactlist');

const insertResult = db.contactlist.insertMany([
  { lastName: 'Ben', firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
  { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
  { lastName: 'Emilie', firstName: 'brouge', email: 'emilie.b@gmail.com', age: 40 },
  { lastName: 'Alex', firstName: 'brown', age: 4 },
  { lastName: 'Denzel', firstName: 'Washington', age: 3 },
]);

print('\n1. All contacts');
db.contactlist.find().forEach(printjson);

const oneId = insertResult.insertedIds[0];
print('\n2. One contact by ID');
db.contactlist.findOne({ _id: oneId });

print('\n3. Contacts with age > 18');
db.contactlist.find({ age: { $gt: 18 } }).forEach(printjson);

print('\n4. Contacts with age > 18 and first name containing "ah"');
db.contactlist.find({
  age: { $gt: 18 },
  firstName: /ah/i,
}).forEach(printjson);

print('\n5. Update Kefi Seif to Kefi Anis');
db.contactlist.updateOne(
  { lastName: 'Kefi', firstName: 'Seif' },
  { $set: { firstName: 'Anis' } },
);
db.contactlist.find({ lastName: 'Kefi' }).forEach(printjson);

print('\n6. Delete contacts aged under 5');
db.contactlist.deleteMany({ age: { $lt: 5 } });

print('\n7. Final contacts list');
db.contactlist.find().forEach(printjson);
