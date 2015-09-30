function define(name, value) {
  Object.defineProperty(exports, name, {
    value:      value,
    enumerable: true
  });
}

define("NODEJS_PORT", 8083);
define("JSON_DIR", "jsons");
define("GDOCS_CHALLENGES", '0By1692QGa-25THlfNlU5Z0lLTE0');
define("GDOCS_ACTIVITIES", '0By1692QGa-25SFgtbVNsYVo4Mmc');
define("GDOCS_POINTS", '0By1692QGa-25RzlpclJ1ZEt2NkU');
define("GDOCS_TROPHIES", '0By1692QGa-25WlhOeHRVS1lpR0E');
define("GDOCS_RACE_DEV", '0By1692QGa-25eWhJSk1xaXB0V2M');
define("GDOCS_RACE_QA", '0By1692QGa-25MGYzS19oa0lHTjQ');
define("GDOCS_HALL_OF_FAME", '0By1692QGa-25Z0Rod19UM3RWN1E');
define("GDOCS_USERS", '0By1692QGa-25QmdTaWg0SlVBMzA');
define("GDOCS_USERS_TROPHIES", '0By1692QGa-25WENWUGlzeTRlWGs');

define("GDOCS_CHALLENGES_TTL", 86400);
define("GDOCS_ACTIVITIES_TTL", 86400);
define("GDOCS_POINTS_TTL", 900);
define("GDOCS_TROPHIES_TTL", 86400);
define("GDOCS_RACE_DEV_TTL", 900);
define("GDOCS_RACE_QA_TTL", 900);
define("GDOCS_HALL_OF_FAME_TTL", 86400);
define("GDOCS_USERS_TTL", 40000);
define("GDOCS_USERS_TROPHIES_TTL", 3600);

define("GDOCS", [
                  {
                    "key": "GDOCS_CHALLENGES",
                    "gid": "0By1692QGa-25THlfNlU5Z0lLTE0",
                    "ttl": 86400000
                  },
                  {
                    "key": "GDOCS_ACTIVITIES",
                    "gid": "0By1692QGa-25SFgtbVNsYVo4Mmc",
                    "ttl": 86400000
                  },
                  {
                    "key": "GDOCS_POINTS",
                    "gid": "0By1692QGa-25RzlpclJ1ZEt2NkU",
                    "ttl": 900000
                  },
                  {
                    "key": "GDOCS_TROPHIES",
                    "gid": "0By1692QGa-25WlhOeHRVS1lpR0E",
                    "ttl": 86400000
                  },
                  {
                    "key": "GDOCS_RACE_DEV",
                    "gid": "0By1692QGa-25eWhJSk1xaXB0V2M",
                    "ttl": 900000
                  },
                  {
                    "key": "GDOCS_RACE_QA",
                    "gid": "0By1692QGa-25MGYzS19oa0lHTjQ",
                    "ttl": 900000
                  },
                  {
                    "key": "GDOCS_HALL_OF_FAME",
                    "gid": "0By1692QGa-25Z0Rod19UM3RWN1E",
                    "ttl": 86400000
                  },
                  {
                    "key": "GDOCS_USERS",
                    "gid": "0By1692QGa-25QmdTaWg0SlVBMzA",
                    "ttl": 40000000
                  },
                  {
                    "key": "GDOCS_USERS_TROPHIES",
                    "gid": "0By1692QGa-25WENWUGlzeTRlWGs",
                    "ttl": 3600000
                  }
                ]);

