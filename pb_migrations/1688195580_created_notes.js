migrate((db) => {
  const collection = new Collection({
    "id": "eeihmtd1vtl4ecj",
    "created": "2023-07-01 07:13:00.801Z",
    "updated": "2023-07-01 07:13:00.801Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "chfwyxgk",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eeihmtd1vtl4ecj");

  return dao.deleteCollection(collection);
})
