const postalCodes = [
    {
      "PLZ": 1000,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1003,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1004,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1005,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1006,
      "Kanton": "VD",
      "Gemeinden": "Lac L�man (VD)"
    },
    {
      "PLZ": 1007,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1008,
      "Kanton": "VD",
      "Gemeinden": "Jouxtens-M�zery, Prilly"
    },
    {
      "PLZ": 1009,
      "Kanton": "VD",
      "Gemeinden": "Pully"
    },
    {
      "PLZ": 1010,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1011,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1012,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1015,
      "Kanton": "VD",
      "Gemeinden": "Lac L�man (VD)"
    },
    {
      "PLZ": 1018,
      "Kanton": "VD",
      "Gemeinden": "Lausanne"
    },
    {
      "PLZ": 1020,
      "Kanton": "VD",
      "Gemeinden": "Renens (VD)"
    },
    {
      "PLZ": 1022,
      "Kanton": "VD",
      "Gemeinden": "Chavannes-pr_s-Renens"
    },
    {
      "PLZ": 1023,
      "Kanton": "VD",
      "Gemeinden": "Crissier"
    },
    {
      "PLZ": 1024,
      "Kanton": "VD",
      "Gemeinden": "Ecublens (VD)"
    },
    {
      "PLZ": 1025,
      "Kanton": "VD",
      "Gemeinden": "Saint-Sulpice (VD)"
    },
    {
      "PLZ": 1026,
      "Kanton": "VD",
      "Gemeinden": "Denges, Echandens"
    },
    {
      "PLZ": 1027,
      "Kanton": "VD",
      "Gemeinden": "Lonay"
    },
    {
      "PLZ": 1028,
      "Kanton": "VD",
      "Gemeinden": "Pr�verenges"
    },
    {
      "PLZ": 1029,
      "Kanton": "VD",
      "Gemeinden": "Villars-Sainte-Croix"
    },
    {
      "PLZ": 1030,
      "Kanton": "VD",
      "Gemeinden": "Bussigny"
    },
    {
      "PLZ": 1031,
      "Kanton": "VD",
      "Gemeinden": "Mex (VD)"
    },
    {
      "PLZ": 1032,
      "Kanton": "VD",
      "Gemeinden": "Romanel-sur-Lausanne"
    },
    {
      "PLZ": 1033,
      "Kanton": "VD",
      "Gemeinden": "Cheseaux-sur-Lausanne"
    },
    {
      "PLZ": 1034,
      "Kanton": "VD",
      "Gemeinden": "Boussens"
    },
    {
      "PLZ": 1035,
      "Kanton": "VD",
      "Gemeinden": "Bournens"
    },
    {
      "PLZ": 1036,
      "Kanton": "VD",
      "Gemeinden": "Sullens"
    },
    {
      "PLZ": 1037,
      "Kanton": "VD",
      "Gemeinden": "Etagni_res"
    },
    {
      "PLZ": 1038,
      "Kanton": "VD",
      "Gemeinden": "Bercher"
    },
    {
      "PLZ": 1040,
      "Kanton": "VD",
      "Gemeinden": "Echallens, Saint-Barth�lemy (VD), Villars-le-Terroir"
    },
    {
      "PLZ": 1041,
      "Kanton": "VD",
      "Gemeinden": "Bottens, Montilliez, Jorat-Menthue, Poliez-Pittet"
    },
    {
      "PLZ": 1042,
      "Kanton": "VD",
      "Gemeinden": "Assens, Bettens, Bioley-Orjulaz"
    },
    {
      "PLZ": 1043,
      "Kanton": "VD",
      "Gemeinden": "Montilliez"
    },
    {
      "PLZ": 1044,
      "Kanton": "VD",
      "Gemeinden": "Fey"
    },
    {
      "PLZ": 1045,
      "Kanton": "VD",
      "Gemeinden": "Ogens"
    },
    {
      "PLZ": 1046,
      "Kanton": "VD",
      "Gemeinden": "Rueyres"
    },
    {
      "PLZ": 1047,
      "Kanton": "VD",
      "Gemeinden": "Oppens"
    },
    {
      "PLZ": 1052,
      "Kanton": "VD",
      "Gemeinden": "Le Mont-sur-Lausanne"
    },
    {
      "PLZ": 1053,
      "Kanton": "VD",
      "Gemeinden": "Bretigny-sur-Morrens, Cugy (VD)"
    },
    {
      "PLZ": 1054,
      "Kanton": "VD",
      "Gemeinden": "Morrens (VD)"
    },
    {
      "PLZ": 1055,
      "Kanton": "VD",
      "Gemeinden": "Froideville"
    },
    {
      "PLZ": 1058,
      "Kanton": "VD",
      "Gemeinden": "Jorat-Menthue"
    },
    {
      "PLZ": 1059,
      "Kanton": "VD",
      "Gemeinden": "Jorat-Menthue"
    },
    {
      "PLZ": 1061,
      "Kanton": "VD",
      "Gemeinden": "Jorat-Menthue"
    },
    {
      "PLZ": 1062,
      "Kanton": "VD",
      "Gemeinden": "Jorat-Menthue"
    },
    {
      "PLZ": 1063,
      "Kanton": "VD",
      "Gemeinden": "Boulens, Montanaire"
    },
    {
      "PLZ": 1066,
      "Kanton": "VD",
      "Gemeinden": "Epalinges"
    },
    {
      "PLZ": 1068,
      "Kanton": "VD",
      "Gemeinden": "Pully"
    },
    {
      "PLZ": 1070,
      "Kanton": "VD",
      "Gemeinden": "Puidoux"
    },
    {
      "PLZ": 1071,
      "Kanton": "VD",
      "Gemeinden": "Chexbres, Rivaz, Saint-Saphorin (Lavaux)"
    },
    {
      "PLZ": 1072,
      "Kanton": "VD",
      "Gemeinden": "Forel (Lavaux)"
    },
    {
      "PLZ": 1073,
      "Kanton": "VD",
      "Gemeinden": "Savigny"
    },
    {
      "PLZ": 1076,
      "Kanton": "VD",
      "Gemeinden": "Jorat-M�zi_res"
    },
    {
      "PLZ": 1077,
      "Kanton": "VD",
      "Gemeinden": "Servion"
    },
    {
      "PLZ": 1078,
      "Kanton": "VD",
      "Gemeinden": "Essertes"
    },
    {
      "PLZ": 1080,
      "Kanton": "VD",
      "Gemeinden": "Servion"
    },
    {
      "PLZ": 1081,
      "Kanton": "VD",
      "Gemeinden": "Montpreveyres"
    },
    {
      "PLZ": 1082,
      "Kanton": "VD",
      "Gemeinden": "Corcelles-le-Jorat"
    },
    {
      "PLZ": 1083,
      "Kanton": "VD",
      "Gemeinden": "Jorat-M�zi_res"
    },
    {
      "PLZ": 1084,
      "Kanton": "VD",
      "Gemeinden": "Jorat-M�zi_res"
    },
    {
      "PLZ": 1085,
      "Kanton": "VD",
      "Gemeinden": "Vulliens"
    },
    {
      "PLZ": 1088,
      "Kanton": "VD",
      "Gemeinden": "Ropraz"
    },
    {
      "PLZ": 1090,
      "Kanton": "VD",
      "Gemeinden": "Lutry"
    },
    {
      "PLZ": 1091,
      "Kanton": "VD",
      "Gemeinden": "Bourg-en-Lavaux"
    },
    {
      "PLZ": 1092,
      "Kanton": "VD",
      "Gemeinden": "Belmont-sur-Lausanne"
    },
    {
      "PLZ": 1093,
      "Kanton": "VD",
      "Gemeinden": "Lutry"
    },
    {
      "PLZ": 1094,
      "Kanton": "VD",
      "Gemeinden": "Paudex"
    },
    {
      "PLZ": 1095,
      "Kanton": "VD",
      "Gemeinden": "Lutry"
    },
    {
      "PLZ": 1096,
      "Kanton": "VD",
      "Gemeinden": "Bourg-en-Lavaux"
    },
    {
      "PLZ": 1097,
      "Kanton": "VD",
      "Gemeinden": "Bourg-en-Lavaux"
    },
    {
      "PLZ": 1098,
      "Kanton": "VD",
      "Gemeinden": "Bourg-en-Lavaux"
    },
    {
      "PLZ": 1110,
      "Kanton": "VD",
      "Gemeinden": "Morges"
    },
    {
      "PLZ": 1112,
      "Kanton": "VD",
      "Gemeinden": "Echichens"
    },
    {
      "PLZ": 1113,
      "Kanton": "VD",
      "Gemeinden": "Echichens"
    },
    {
      "PLZ": 1114,
      "Kanton": "VD",
      "Gemeinden": "Echichens"
    },
    {
      "PLZ": 1115,
      "Kanton": "VD",
      "Gemeinden": "Vullierens"
    },
    {
      "PLZ": 1116,
      "Kanton": "VD",
      "Gemeinden": "Cottens (VD)"
    },
    {
      "PLZ": 1117,
      "Kanton": "VD",
      "Gemeinden": "Grancy"
    },
    {
      "PLZ": 1121,
      "Kanton": "VD",
      "Gemeinden": "Bremblens"
    },
    {
      "PLZ": 1122,
      "Kanton": "VD",
      "Gemeinden": "Romanel-sur-Morges"
    },
    {
      "PLZ": 1123,
      "Kanton": "VD",
      "Gemeinden": "Aclens"
    },
    {
      "PLZ": 1124,
      "Kanton": "VD",
      "Gemeinden": "Gollion"
    },
    {
      "PLZ": 1125,
      "Kanton": "VD",
      "Gemeinden": "Echichens"
    },
    {
      "PLZ": 1126,
      "Kanton": "VD",
      "Gemeinden": "Vaux-sur-Morges"
    },
    {
      "PLZ": 1127,
      "Kanton": "VD",
      "Gemeinden": "Clarmont"
    },
    {
      "PLZ": 1128,
      "Kanton": "VD",
      "Gemeinden": "Reverolle"
    },
    {
      "PLZ": 1131,
      "Kanton": "VD",
      "Gemeinden": "Tolochenaz"
    },
    {
      "PLZ": 1132,
      "Kanton": "VD",
      "Gemeinden": "Lully (VD)"
    },
    {
      "PLZ": 1134,
      "Kanton": "VD",
      "Gemeinden": "Chigny, Vufflens-le-Ch�teau"
    },
    {
      "PLZ": 1135,
      "Kanton": "VD",
      "Gemeinden": "Denens"
    },
    {
      "PLZ": 1136,
      "Kanton": "VD",
      "Gemeinden": "Bussy-Chardonney"
    },
    {
      "PLZ": 1141,
      "Kanton": "VD",
      "Gemeinden": "S�very"
    },
    {
      "PLZ": 1142,
      "Kanton": "VD",
      "Gemeinden": "Pampigny"
    },
    {
      "PLZ": 1143,
      "Kanton": "VD",
      "Gemeinden": "Apples"
    },
    {
      "PLZ": 1144,
      "Kanton": "VD",
      "Gemeinden": "Ballens"
    },
    {
      "PLZ": 1145,
      "Kanton": "VD",
      "Gemeinden": "Bi_re"
    },
    {
      "PLZ": 1146,
      "Kanton": "VD",
      "Gemeinden": "Mollens (VD)"
    },
    {
      "PLZ": 1147,
      "Kanton": "VD",
      "Gemeinden": "Montricher"
    },
    {
      "PLZ": 1148,
      "Kanton": "VD",
      "Gemeinden": "Chavannes-le-Veyron, Cuarnens, L'Isle, La Praz, Mauraz, Moiry, Mont-la-Ville"
    },
    {
      "PLZ": 1149,
      "Kanton": "VD",
      "Gemeinden": "Berolle"
    },
    {
      "PLZ": 1162,
      "Kanton": "VD",
      "Gemeinden": "Saint-Prex"
    },
    {
      "PLZ": 1163,
      "Kanton": "VD",
      "Gemeinden": "Etoy"
    },
    {
      "PLZ": 1164,
      "Kanton": "VD",
      "Gemeinden": "Buchillon"
    },
    {
      "PLZ": 1165,
      "Kanton": "VD",
      "Gemeinden": "Allaman"
    },
    {
      "PLZ": 1166,
      "Kanton": "VD",
      "Gemeinden": "Perroy"
    },
    {
      "PLZ": 1167,
      "Kanton": "VD",
      "Gemeinden": "Lussy-sur-Morges"
    },
    {
      "PLZ": 1168,
      "Kanton": "VD",
      "Gemeinden": "Villars-sous-Yens"
    },
    {
      "PLZ": 1169,
      "Kanton": "VD",
      "Gemeinden": "Yens"
    },
    {
      "PLZ": 1170,
      "Kanton": "VD",
      "Gemeinden": "Aubonne"
    },
    {
      "PLZ": 1172,
      "Kanton": "VD",
      "Gemeinden": "Bougy-Villars"
    },
    {
      "PLZ": 1173,
      "Kanton": "VD",
      "Gemeinden": "F�chy"
    },
    {
      "PLZ": 1174,
      "Kanton": "VD",
      "Gemeinden": "Montherod, Aubonne"
    },
    {
      "PLZ": 1175,
      "Kanton": "VD",
      "Gemeinden": "Lavigny"
    },
    {
      "PLZ": 1176,
      "Kanton": "VD",
      "Gemeinden": "Saint-Livres"
    },
    {
      "PLZ": 1180,
      "Kanton": "VD",
      "Gemeinden": "Rolle, Tartegnin"
    },
    {
      "PLZ": 1182,
      "Kanton": "VD",
      "Gemeinden": "Gilly"
    },
    {
      "PLZ": 1183,
      "Kanton": "VD",
      "Gemeinden": "Bursins"
    },
    {
      "PLZ": 1184,
      "Kanton": "VD",
      "Gemeinden": "Luins, Vinzel"
    },
    {
      "PLZ": 1185,
      "Kanton": "VD",
      "Gemeinden": "Mont-sur-Rolle"
    },
    {
      "PLZ": 1186,
      "Kanton": "VD",
      "Gemeinden": "Essertines-sur-Rolle"
    },
    {
      "PLZ": 1187,
      "Kanton": "VD",
      "Gemeinden": "Saint-Oyens"
    },
    {
      "PLZ": 1188,
      "Kanton": "VD",
      "Gemeinden": "Gimel, Saint-George"
    },
    {
      "PLZ": 1189,
      "Kanton": "VD",
      "Gemeinden": "Saubraz"
    },
    {
      "PLZ": 1195,
      "Kanton": "VD",
      "Gemeinden": "Bursinel, Dully"
    },
    {
      "PLZ": 1196,
      "Kanton": "VD",
      "Gemeinden": "Gland"
    },
    {
      "PLZ": 1197,
      "Kanton": "VD",
      "Gemeinden": "Prangins"
    },
    {
      "PLZ": 1201,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1202,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1203,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1204,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1205,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1206,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1207,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1208,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1209,
      "Kanton": "GE",
      "Gemeinden": "Gen_ve"
    },
    {
      "PLZ": 1212,
      "Kanton": "GE",
      "Gemeinden": "Lancy"
    },
    {
      "PLZ": 1213,
      "Kanton": "GE",
      "Gemeinden": "Onex, Lancy"
    },
    {
      "PLZ": 1214,
      "Kanton": "GE",
      "Gemeinden": "Vernier"
    },
    {
      "PLZ": 1215,
      "Kanton": "GE",
      "Gemeinden": "Le Grand-Saconnex"
    },
    {
      "PLZ": 1216,
      "Kanton": "GE",
      "Gemeinden": "Meyrin"
    },
    {
      "PLZ": 1217,
      "Kanton": "GE",
      "Gemeinden": "Meyrin"
    },
    {
      "PLZ": 1218,
      "Kanton": "GE",
      "Gemeinden": "Le Grand-Saconnex"
    },
    {
      "PLZ": 1219,
      "Kanton": "GE",
      "Gemeinden": "Vernier"
    },
    {
      "PLZ": 1220,
      "Kanton": "GE",
      "Gemeinden": "Vernier"
    },
    {
      "PLZ": 1222,
      "Kanton": "GE",
      "Gemeinden": "Collonge-Bellerive"
    },
    {
      "PLZ": 1223,
      "Kanton": "GE",
      "Gemeinden": "Cologny"
    },
    {
      "PLZ": 1224,
      "Kanton": "GE",
      "Gemeinden": "Ch_ne-Bougeries, Th�nex"
    },
    {
      "PLZ": 1225,
      "Kanton": "GE",
      "Gemeinden": "Ch_ne-Bourg"
    },
    {
      "PLZ": 1226,
      "Kanton": "GE",
      "Gemeinden": "Th�nex"
    },
    {
      "PLZ": 1227,
      "Kanton": "GE",
      "Gemeinden": "Carouge (GE), Gen_ve"
    },
    {
      "PLZ": 1228,
      "Kanton": "GE",
      "Gemeinden": "Plan-les-Ouates"
    },
    {
      "PLZ": 1231,
      "Kanton": "GE",
      "Gemeinden": "Ch_ne-Bougeries"
    },
    {
      "PLZ": 1232,
      "Kanton": "GE",
      "Gemeinden": "Confignon"
    },
    {
      "PLZ": 1233,
      "Kanton": "GE",
      "Gemeinden": "BEex"
    },
    {
      "PLZ": 1234,
      "Kanton": "GE",
      "Gemeinden": "Veyrier"
    },
    {
      "PLZ": 1236,
      "Kanton": "GE",
      "Gemeinden": "Cartigny"
    },
    {
      "PLZ": 1237,
      "Kanton": "GE",
      "Gemeinden": "Avully"
    },
    {
      "PLZ": 1239,
      "Kanton": "GE",
      "Gemeinden": "Collex-Bossy"
    },
    {
      "PLZ": 1241,
      "Kanton": "GE",
      "Gemeinden": "Puplinge"
    },
    {
      "PLZ": 1242,
      "Kanton": "GE",
      "Gemeinden": "Satigny"
    },
    {
      "PLZ": 1243,
      "Kanton": "GE",
      "Gemeinden": "Presinge"
    },
    {
      "PLZ": 1244,
      "Kanton": "GE",
      "Gemeinden": "Choulex"
    },
    {
      "PLZ": 1245,
      "Kanton": "GE",
      "Gemeinden": "Collonge-Bellerive"
    },
    {
      "PLZ": 1246,
      "Kanton": "GE",
      "Gemeinden": "Corsier (GE)"
    },
    {
      "PLZ": 1247,
      "Kanton": "GE",
      "Gemeinden": "Ani_res"
    },
    {
      "PLZ": 1248,
      "Kanton": "GE",
      "Gemeinden": "Hermance"
    },
    {
      "PLZ": 1251,
      "Kanton": "GE",
      "Gemeinden": "Gy"
    },
    {
      "PLZ": 1252,
      "Kanton": "GE",
      "Gemeinden": "Meinier"
    },
    {
      "PLZ": 1253,
      "Kanton": "GE",
      "Gemeinden": "Vandoeuvres"
    },
    {
      "PLZ": 1254,
      "Kanton": "GE",
      "Gemeinden": "Jussy"
    },
    {
      "PLZ": 1255,
      "Kanton": "GE",
      "Gemeinden": "Veyrier"
    },
    {
      "PLZ": 1256,
      "Kanton": "GE",
      "Gemeinden": "Troinex"
    },
    {
      "PLZ": 1257,
      "Kanton": "GE",
      "Gemeinden": "Bardonnex"
    },
    {
      "PLZ": 1258,
      "Kanton": "GE",
      "Gemeinden": "Perly-Certoux"
    },
    {
      "PLZ": 1260,
      "Kanton": "VD",
      "Gemeinden": "Nyon"
    },
    {
      "PLZ": 1261,
      "Kanton": "VD",
      "Gemeinden": "Le Vaud, Longirod, Marchissy"
    },
    {
      "PLZ": 1262,
      "Kanton": "VD",
      "Gemeinden": "Eysins"
    },
    {
      "PLZ": 1263,
      "Kanton": "VD",
      "Gemeinden": "Crassier"
    },
    {
      "PLZ": 1264,
      "Kanton": "VD",
      "Gemeinden": "Saint-Cergue"
    },
    {
      "PLZ": 1265,
      "Kanton": "VD",
      "Gemeinden": "Saint-Cergue"
    },
    {
      "PLZ": 1266,
      "Kanton": "VD",
      "Gemeinden": "Duillier"
    },
    {
      "PLZ": 1267,
      "Kanton": "VD",
      "Gemeinden": "Coinsins, Vich"
    },
    {
      "PLZ": 1268,
      "Kanton": "VD",
      "Gemeinden": "Begnins, Burtigny"
    },
    {
      "PLZ": 1269,
      "Kanton": "VD",
      "Gemeinden": "Bassins"
    },
    {
      "PLZ": 1270,
      "Kanton": "VD",
      "Gemeinden": "Tr�lex"
    },
    {
      "PLZ": 1271,
      "Kanton": "VD",
      "Gemeinden": "Givrins"
    },
    {
      "PLZ": 1272,
      "Kanton": "VD",
      "Gemeinden": "Genolier"
    },
    {
      "PLZ": 1273,
      "Kanton": "VD",
      "Gemeinden": "Arzier-Le Muids"
    },
    {
      "PLZ": 1274,
      "Kanton": "VD",
      "Gemeinden": "Grens, Signy-Avenex"
    },
    {
      "PLZ": 1275,
      "Kanton": "VD",
      "Gemeinden": "Ch�serex"
    },
    {
      "PLZ": 1276,
      "Kanton": "VD",
      "Gemeinden": "Gingins"
    },
    {
      "PLZ": 1277,
      "Kanton": "VD",
      "Gemeinden": "Arnex-sur-Nyon, Borex"
    },
    {
      "PLZ": 1278,
      "Kanton": "VD",
      "Gemeinden": "La Rippe"
    },
    {
      "PLZ": 1279,
      "Kanton": "VD",
      "Gemeinden": "Bogis-Bossey, Chavannes-de-Bogis"
    },
    {
      "PLZ": 1281,
      "Kanton": "GE",
      "Gemeinden": "Russin"
    },
    {
      "PLZ": 1283,
      "Kanton": "GE",
      "Gemeinden": "Dardagny"
    },
    {
      "PLZ": 1284,
      "Kanton": "GE",
      "Gemeinden": "Chancy"
    },
    {
      "PLZ": 1285,
      "Kanton": "GE",
      "Gemeinden": "Avusy"
    },
    {
      "PLZ": 1286,
      "Kanton": "GE",
      "Gemeinden": "Soral"
    },
    {
      "PLZ": 1287,
      "Kanton": "GE",
      "Gemeinden": "Laconnex"
    },
    {
      "PLZ": 1288,
      "Kanton": "GE",
      "Gemeinden": "Aire-la-Ville"
    },
    {
      "PLZ": 1290,
      "Kanton": "VD",
      "Gemeinden": "Chavannes-des-Bois, Versoix"
    },
    {
      "PLZ": 1291,
      "Kanton": "VD",
      "Gemeinden": "Commugny"
    },
    {
      "PLZ": 1292,
      "Kanton": "GE",
      "Gemeinden": "Pregny-Chamb�sy"
    },
    {
      "PLZ": 1293,
      "Kanton": "GE",
      "Gemeinden": "Bellevue"
    },
    {
      "PLZ": 1294,
      "Kanton": "GE",
      "Gemeinden": "Genthod"
    },
    {
      "PLZ": 1295,
      "Kanton": "VD",
      "Gemeinden": "Mies, Tannay"
    },
    {
      "PLZ": 1296,
      "Kanton": "VD",
      "Gemeinden": "Coppet"
    },
    {
      "PLZ": 1297,
      "Kanton": "VD",
      "Gemeinden": "Founex"
    },
    {
      "PLZ": 1298,
      "Kanton": "GE",
      "Gemeinden": "C�ligny"
    },
    {
      "PLZ": 1299,
      "Kanton": "VD",
      "Gemeinden": "Crans-pr_s-C�ligny"
    },
    {
      "PLZ": 1302,
      "Kanton": "VD",
      "Gemeinden": "Vufflens-la-Ville"
    },
    {
      "PLZ": 1303,
      "Kanton": "VD",
      "Gemeinden": "Penthaz"
    },
    {
      "PLZ": 1304,
      "Kanton": "VD",
      "Gemeinden": "Cossonay, Dizy, Senarclens"
    },
    {
      "PLZ": 1305,
      "Kanton": "VD",
      "Gemeinden": "Penthalaz"
    },
    {
      "PLZ": 1306,
      "Kanton": "VD",
      "Gemeinden": "Daillens"
    },
    {
      "PLZ": 1307,
      "Kanton": "VD",
      "Gemeinden": "Lussery-Villars"
    },
    {
      "PLZ": 1308,
      "Kanton": "VD",
      "Gemeinden": "La Chaux (Cossonay)"
    },
    {
      "PLZ": 1312,
      "Kanton": "VD",
      "Gemeinden": "Ecl�pens"
    },
    {
      "PLZ": 1313,
      "Kanton": "VD",
      "Gemeinden": "Ferreyres"
    },
    {
      "PLZ": 1315,
      "Kanton": "VD",
      "Gemeinden": "La Sarraz"
    },
    {
      "PLZ": 1316,
      "Kanton": "VD",
      "Gemeinden": "Chevilly"
    },
    {
      "PLZ": 1317,
      "Kanton": "VD",
      "Gemeinden": "Orny"
    },
    {
      "PLZ": 1318,
      "Kanton": "VD",
      "Gemeinden": "Pompaples"
    },
    {
      "PLZ": 1321,
      "Kanton": "VD",
      "Gemeinden": "Arnex-sur-Orbe"
    },
    {
      "PLZ": 1322,
      "Kanton": "VD",
      "Gemeinden": "Croy"
    },
    {
      "PLZ": 1323,
      "Kanton": "VD",
      "Gemeinden": "Romainm�tier-Envy"
    },
    {
      "PLZ": 1324,
      "Kanton": "VD",
      "Gemeinden": "Premier"
    },
    {
      "PLZ": 1325,
      "Kanton": "VD",
      "Gemeinden": "Vaulion"
    },
    {
      "PLZ": 1326,
      "Kanton": "VD",
      "Gemeinden": "JURens"
    },
    {
      "PLZ": 1329,
      "Kanton": "VD",
      "Gemeinden": "Bretonni_res"
    },
    {
      "PLZ": 1337,
      "Kanton": "VD",
      "Gemeinden": "Vallorbe"
    },
    {
      "PLZ": 1338,
      "Kanton": "VD",
      "Gemeinden": "Ballaigues"
    },
    {
      "PLZ": 1341,
      "Kanton": "VD",
      "Gemeinden": "Le Chenit"
    },
    {
      "PLZ": 1342,
      "Kanton": "VD",
      "Gemeinden": "L'Abbaye"
    },
    {
      "PLZ": 1343,
      "Kanton": "VD",
      "Gemeinden": "Le Lieu"
    },
    {
      "PLZ": 1344,
      "Kanton": "VD",
      "Gemeinden": "L'Abbaye"
    },
    {
      "PLZ": 1345,
      "Kanton": "VD",
      "Gemeinden": "Le Lieu"
    },
    {
      "PLZ": 1346,
      "Kanton": "VD",
      "Gemeinden": "L'Abbaye"
    },
    {
      "PLZ": 1347,
      "Kanton": "VD",
      "Gemeinden": "Le Chenit"
    },
    {
      "PLZ": 1348,
      "Kanton": "VD",
      "Gemeinden": "Le Chenit"
    },
    {
      "PLZ": 1350,
      "Kanton": "VD",
      "Gemeinden": "Orbe"
    },
    {
      "PLZ": 1352,
      "Kanton": "VD",
      "Gemeinden": "Agiez"
    },
    {
      "PLZ": 1353,
      "Kanton": "VD",
      "Gemeinden": "Bofflens"
    },
    {
      "PLZ": 1354,
      "Kanton": "VD",
      "Gemeinden": "Montcherand"
    },
    {
      "PLZ": 1355,
      "Kanton": "VD",
      "Gemeinden": "L'Abergement, Sergey"
    },
    {
      "PLZ": 1356,
      "Kanton": "VD",
      "Gemeinden": "Les Cl�es"
    },
    {
      "PLZ": 1357,
      "Kanton": "VD",
      "Gemeinden": "Lignerolle"
    },
    {
      "PLZ": 1358,
      "Kanton": "VD",
      "Gemeinden": "Valeyres-sous-Rances"
    },
    {
      "PLZ": 1372,
      "Kanton": "VD",
      "Gemeinden": "Bavois"
    },
    {
      "PLZ": 1373,
      "Kanton": "VD",
      "Gemeinden": "Chavornay"
    },
    {
      "PLZ": 1374,
      "Kanton": "VD",
      "Gemeinden": "Corcelles-sur-Chavornay"
    },
    {
      "PLZ": 1375,
      "Kanton": "VD",
      "Gemeinden": "Penth�r�az"
    },
    {
      "PLZ": 1376,
      "Kanton": "VD",
      "Gemeinden": "Goumo�ns"
    },
    {
      "PLZ": 1377,
      "Kanton": "VD",
      "Gemeinden": "Oulens-sous-Echallens"
    },
    {
      "PLZ": 1400,
      "Kanton": "VD",
      "Gemeinden": "Cheseaux-Nor�az, Yverdon-les-Bains"
    },
    {
      "PLZ": 1404,
      "Kanton": "VD",
      "Gemeinden": "Cuarny, Villars-Epeney"
    },
    {
      "PLZ": 1405,
      "Kanton": "VD",
      "Gemeinden": "Pomy"
    },
    {
      "PLZ": 1406,
      "Kanton": "VD",
      "Gemeinden": "Cronay"
    },
    {
      "PLZ": 1407,
      "Kanton": "VD",
      "Gemeinden": "Bioley-Magnoux, Donneloye"
    },
    {
      "PLZ": 1408,
      "Kanton": "VD",
      "Gemeinden": "Donneloye"
    },
    {
      "PLZ": 1409,
      "Kanton": "VD",
      "Gemeinden": "Montanaire"
    },
    {
      "PLZ": 1410,
      "Kanton": "VD",
      "Gemeinden": "Montanaire, Pr�vondavaux"
    },
    {
      "PLZ": 1412,
      "Kanton": "VD",
      "Gemeinden": "Ursins, Valeyres-sous-Ursins"
    },
    {
      "PLZ": 1413,
      "Kanton": "VD",
      "Gemeinden": "Orzens"
    },
    {
      "PLZ": 1415,
      "Kanton": "VD",
      "Gemeinden": "D�moret, Molondin"
    },
    {
      "PLZ": 1416,
      "Kanton": "VD",
      "Gemeinden": "Pailly"
    },
    {
      "PLZ": 1417,
      "Kanton": "VD",
      "Gemeinden": "Essertines-sur-Yverdon"
    },
    {
      "PLZ": 1418,
      "Kanton": "VD",
      "Gemeinden": "Vuarrens"
    },
    {
      "PLZ": 1420,
      "Kanton": "VD",
      "Gemeinden": "Fiez"
    },
    {
      "PLZ": 1421,
      "Kanton": "VD",
      "Gemeinden": "Fontaines-sur-Grandson, Grandevent"
    },
    {
      "PLZ": 1422,
      "Kanton": "VD",
      "Gemeinden": "Grandson"
    },
    {
      "PLZ": 1423,
      "Kanton": "VD",
      "Gemeinden": "T�venon"
    },
    {
      "PLZ": 1424,
      "Kanton": "VD",
      "Gemeinden": "Champagne"
    },
    {
      "PLZ": 1425,
      "Kanton": "VD",
      "Gemeinden": "Onnens (VD)"
    },
    {
      "PLZ": 1426,
      "Kanton": "VD",
      "Gemeinden": "Concise, Corcelles-pr_s-Concise"
    },
    {
      "PLZ": 1427,
      "Kanton": "VD",
      "Gemeinden": "Bonvillars"
    },
    {
      "PLZ": 1428,
      "Kanton": "VD",
      "Gemeinden": "Mutrux, Provence"
    },
    {
      "PLZ": 1429,
      "Kanton": "VD",
      "Gemeinden": "Giez"
    },
    {
      "PLZ": 1430,
      "Kanton": "VD",
      "Gemeinden": "Orges"
    },
    {
      "PLZ": 1431,
      "Kanton": "VD",
      "Gemeinden": "Novalles, Vugelles-La Mothe"
    },
    {
      "PLZ": 1432,
      "Kanton": "VD",
      "Gemeinden": "Belmont-sur-Yverdon, Yverdon-les-Bains"
    },
    {
      "PLZ": 1433,
      "Kanton": "VD",
      "Gemeinden": "Suchy"
    },
    {
      "PLZ": 1434,
      "Kanton": "VD",
      "Gemeinden": "Ependes (VD)"
    },
    {
      "PLZ": 1435,
      "Kanton": "VD",
      "Gemeinden": "Essert-Pittet"
    },
    {
      "PLZ": 1436,
      "Kanton": "VD",
      "Gemeinden": "Chamblon, Treycovagnes"
    },
    {
      "PLZ": 1437,
      "Kanton": "VD",
      "Gemeinden": "Susc�vaz"
    },
    {
      "PLZ": 1438,
      "Kanton": "VD",
      "Gemeinden": "Mathod"
    },
    {
      "PLZ": 1439,
      "Kanton": "VD",
      "Gemeinden": "Rances"
    },
    {
      "PLZ": 1441,
      "Kanton": "VD",
      "Gemeinden": "Valeyres-sous-Montagny"
    },
    {
      "PLZ": 1442,
      "Kanton": "VD",
      "Gemeinden": "Montagny-pr_s-Yverdon"
    },
    {
      "PLZ": 1443,
      "Kanton": "VD",
      "Gemeinden": "Champvent"
    },
    {
      "PLZ": 1445,
      "Kanton": "VD",
      "Gemeinden": "Vuiteboeuf"
    },
    {
      "PLZ": 1446,
      "Kanton": "VD",
      "Gemeinden": "Baulmes"
    },
    {
      "PLZ": 1450,
      "Kanton": "VD",
      "Gemeinden": "Sainte-Croix"
    },
    {
      "PLZ": 1452,
      "Kanton": "VD",
      "Gemeinden": "Bullet"
    },
    {
      "PLZ": 1453,
      "Kanton": "VD",
      "Gemeinden": "Bullet, Mauborget"
    },
    {
      "PLZ": 1454,
      "Kanton": "VD",
      "Gemeinden": "Sainte-Croix"
    },
    {
      "PLZ": 1462,
      "Kanton": "VD",
      "Gemeinden": "Yvonand"
    },
    {
      "PLZ": 1463,
      "Kanton": "VD",
      "Gemeinden": "Rovray"
    },
    {
      "PLZ": 1464,
      "Kanton": "VD",
      "Gemeinden": "Chavannes-le-Ch_ne, Ch_ne-P�quier"
    },
    {
      "PLZ": 1468,
      "Kanton": "FR",
      "Gemeinden": "Cheyres"
    },
    {
      "PLZ": 1470,
      "Kanton": "FR",
      "Gemeinden": "Lully (FR), Estavayer-le-Lac"
    },
    {
      "PLZ": 1473,
      "Kanton": "FR",
      "Gemeinden": "Ch�tillon (FR), Estavayer-le-Lac"
    },
    {
      "PLZ": 1474,
      "Kanton": "FR",
      "Gemeinden": "Ch�bles"
    },
    {
      "PLZ": 1475,
      "Kanton": "FR",
      "Gemeinden": "Vernay"
    },
    {
      "PLZ": 1482,
      "Kanton": "FR",
      "Gemeinden": "Cugy (FR)"
    },
    {
      "PLZ": 1483,
      "Kanton": "FR",
      "Gemeinden": "Les Montets, Cugy (FR)"
    },
    {
      "PLZ": 1484,
      "Kanton": "FR",
      "Gemeinden": "Les Montets"
    },
    {
      "PLZ": 1485,
      "Kanton": "FR",
      "Gemeinden": "Nuvilly"
    },
    {
      "PLZ": 1486,
      "Kanton": "FR",
      "Gemeinden": "Vuissens"
    },
    {
      "PLZ": 1489,
      "Kanton": "FR",
      "Gemeinden": "MURst"
    },
    {
      "PLZ": 1509,
      "Kanton": "VD",
      "Gemeinden": "Vucherens"
    },
    {
      "PLZ": 1510,
      "Kanton": "VD",
      "Gemeinden": "Moudon, Syens"
    },
    {
      "PLZ": 1512,
      "Kanton": "VD",
      "Gemeinden": "Chavannes-sur-Moudon"
    },
    {
      "PLZ": 1513,
      "Kanton": "VD",
      "Gemeinden": "Hermenches, Rossenges"
    },
    {
      "PLZ": 1514,
      "Kanton": "VD",
      "Gemeinden": "Bussy-sur-Moudon"
    },
    {
      "PLZ": 1515,
      "Kanton": "VD",
      "Gemeinden": "Montanaire, Villars-le-Comte"
    },
    {
      "PLZ": 1521,
      "Kanton": "VD",
      "Gemeinden": "Curtilles"
    },
    {
      "PLZ": 1522,
      "Kanton": "VD",
      "Gemeinden": "Lucens"
    },
    {
      "PLZ": 1523,
      "Kanton": "VD",
      "Gemeinden": "Valbroye"
    },
    {
      "PLZ": 1524,
      "Kanton": "VD",
      "Gemeinden": "Valbroye"
    },
    {
      "PLZ": 1525,
      "Kanton": "VD",
      "Gemeinden": "Henniez, Valbroye"
    },
    {
      "PLZ": 1526,
      "Kanton": "VD",
      "Gemeinden": "Cremin, Forel-sur-Lucens"
    },
    {
      "PLZ": 1527,
      "Kanton": "FR",
      "Gemeinden": "Villeneuve (FR)"
    },
    {
      "PLZ": 1528,
      "Kanton": "FR",
      "Gemeinden": "Surpierre"
    },
    {
      "PLZ": 1529,
      "Kanton": "FR",
      "Gemeinden": "Cheiry"
    },
    {
      "PLZ": 1530,
      "Kanton": "VD",
      "Gemeinden": "Payerne"
    },
    {
      "PLZ": 1532,
      "Kanton": "FR",
      "Gemeinden": "F�tigny"
    },
    {
      "PLZ": 1533,
      "Kanton": "FR",
      "Gemeinden": "M�ni_res"
    },
    {
      "PLZ": 1534,
      "Kanton": "FR",
      "Gemeinden": "Cheiry, Valbroye"
    },
    {
      "PLZ": 1535,
      "Kanton": "VD",
      "Gemeinden": "Valbroye"
    },
    {
      "PLZ": 1536,
      "Kanton": "VD",
      "Gemeinden": "Valbroye"
    },
    {
      "PLZ": 1537,
      "Kanton": "VD",
      "Gemeinden": "Champtauroz"
    },
    {
      "PLZ": 1538,
      "Kanton": "VD",
      "Gemeinden": "Treytorrens (Payerne)"
    },
    {
      "PLZ": 1541,
      "Kanton": "FR",
      "Gemeinden": "Bussy (FR), Morens (FR), S�vaz"
    },
    {
      "PLZ": 1542,
      "Kanton": "FR",
      "Gemeinden": "Rueyres-les-Pr�s"
    },
    {
      "PLZ": 1543,
      "Kanton": "VD",
      "Gemeinden": "Grandcour"
    },
    {
      "PLZ": 1544,
      "Kanton": "FR",
      "Gemeinden": "Gletterens"
    },
    {
      "PLZ": 1545,
      "Kanton": "VD",
      "Gemeinden": "Chevroux"
    },
    {
      "PLZ": 1551,
      "Kanton": "VD",
      "Gemeinden": "Payerne"
    },
    {
      "PLZ": 1552,
      "Kanton": "VD",
      "Gemeinden": "Trey"
    },
    {
      "PLZ": 1553,
      "Kanton": "FR",
      "Gemeinden": "Ch�tonnaye"
    },
    {
      "PLZ": 1554,
      "Kanton": "VD",
      "Gemeinden": "Villarzel"
    },
    {
      "PLZ": 1555,
      "Kanton": "VD",
      "Gemeinden": "Villarzel"
    },
    {
      "PLZ": 1562,
      "Kanton": "VD",
      "Gemeinden": "Corcelles-pr_s-Payerne"
    },
    {
      "PLZ": 1563,
      "Kanton": "FR",
      "Gemeinden": "Belmont-Broye"
    },
    {
      "PLZ": 1564,
      "Kanton": "FR",
      "Gemeinden": "Belmont-Broye"
    },
    {
      "PLZ": 1565,
      "Kanton": "VD",
      "Gemeinden": "Missy, Vallon"
    },
    {
      "PLZ": 1566,
      "Kanton": "FR",
      "Gemeinden": "Saint-Aubin (FR)"
    },
    {
      "PLZ": 1567,
      "Kanton": "FR",
      "Gemeinden": "Delley-Portalban"
    },
    {
      "PLZ": 1568,
      "Kanton": "FR",
      "Gemeinden": "Delley-Portalban"
    },
    {
      "PLZ": 1580,
      "Kanton": "VD",
      "Gemeinden": "Avenches"
    },
    {
      "PLZ": 1583,
      "Kanton": "FR",
      "Gemeinden": "Villarepos"
    },
    {
      "PLZ": 1584,
      "Kanton": "VD",
      "Gemeinden": "Vully-les-Lacs"
    },
    {
      "PLZ": 1585,
      "Kanton": "VD",
      "Gemeinden": "Vully-les-Lacs"
    },
    {
      "PLZ": 1586,
      "Kanton": "VD",
      "Gemeinden": "Vully-les-Lacs"
    },
    {
      "PLZ": 1587,
      "Kanton": "VD",
      "Gemeinden": "Vully-les-Lacs"
    },
    {
      "PLZ": 1588,
      "Kanton": "VD",
      "Gemeinden": "Cudrefin"
    },
    {
      "PLZ": 1589,
      "Kanton": "VD",
      "Gemeinden": "Vully-les-Lacs"
    },
    {
      "PLZ": 1595,
      "Kanton": "BE",
      "Gemeinden": "Clavaleyres, Faoug"
    },
    {
      "PLZ": 1607,
      "Kanton": "VD",
      "Gemeinden": "Oron"
    },
    {
      "PLZ": 1608,
      "Kanton": "VD",
      "Gemeinden": "Oron, Chapelle (Gl�ne)"
    },
    {
      "PLZ": 1609,
      "Kanton": "FR",
      "Gemeinden": "Saint-Martin (FR)"
    },
    {
      "PLZ": 1610,
      "Kanton": "VD",
      "Gemeinden": "Oron"
    },
    {
      "PLZ": 1611,
      "Kanton": "FR",
      "Gemeinden": "La Verrerie"
    },
    {
      "PLZ": 1612,
      "Kanton": "VD",
      "Gemeinden": "Oron"
    },
    {
      "PLZ": 1613,
      "Kanton": "VD",
      "Gemeinden": "Maracon"
    },
    {
      "PLZ": 1614,
      "Kanton": "FR",
      "Gemeinden": "Granges (Veveyse)"
    },
    {
      "PLZ": 1615,
      "Kanton": "FR",
      "Gemeinden": "Bossonnens"
    },
    {
      "PLZ": 1616,
      "Kanton": "FR",
      "Gemeinden": "Attalens"
    },
    {
      "PLZ": 1617,
      "Kanton": "FR",
      "Gemeinden": "Remaufens, Attalens"
    },
    {
      "PLZ": 1618,
      "Kanton": "FR",
      "Gemeinden": "Ch�tel-Saint-Denis"
    },
    {
      "PLZ": 1619,
      "Kanton": "FR",
      "Gemeinden": "Ch�tel-Saint-Denis"
    },
    {
      "PLZ": 1623,
      "Kanton": "FR",
      "Gemeinden": "Semsales"
    },
    {
      "PLZ": 1624,
      "Kanton": "FR",
      "Gemeinden": "La Verrerie, Semsales"
    },
    {
      "PLZ": 1625,
      "Kanton": "FR",
      "Gemeinden": "S�les"
    },
    {
      "PLZ": 1626,
      "Kanton": "FR",
      "Gemeinden": "S�les"
    },
    {
      "PLZ": 1627,
      "Kanton": "FR",
      "Gemeinden": "Vaulruz"
    },
    {
      "PLZ": 1628,
      "Kanton": "FR",
      "Gemeinden": "Vuadens"
    },
    {
      "PLZ": 1630,
      "Kanton": "FR",
      "Gemeinden": "Bulle"
    },
    {
      "PLZ": 1632,
      "Kanton": "FR",
      "Gemeinden": "Riaz"
    },
    {
      "PLZ": 1633,
      "Kanton": "FR",
      "Gemeinden": "Marsens"
    },
    {
      "PLZ": 1634,
      "Kanton": "FR",
      "Gemeinden": "La Roche"
    },
    {
      "PLZ": 1635,
      "Kanton": "FR",
      "Gemeinden": "Bulle"
    },
    {
      "PLZ": 1636,
      "Kanton": "FR",
      "Gemeinden": "Broc"
    },
    {
      "PLZ": 1637,
      "Kanton": "FR",
      "Gemeinden": "Val-de-Charmey"
    },
    {
      "PLZ": 1638,
      "Kanton": "FR",
      "Gemeinden": "Morlon"
    },
    {
      "PLZ": 1642,
      "Kanton": "FR",
      "Gemeinden": "Sorens"
    },
    {
      "PLZ": 1643,
      "Kanton": "FR",
      "Gemeinden": "Pont-en-Ogoz"
    },
    {
      "PLZ": 1644,
      "Kanton": "FR",
      "Gemeinden": "Pont-en-Ogoz"
    },
    {
      "PLZ": 1645,
      "Kanton": "FR",
      "Gemeinden": "Pont-en-Ogoz"
    },
    {
      "PLZ": 1646,
      "Kanton": "FR",
      "Gemeinden": "Echarlens"
    },
    {
      "PLZ": 1647,
      "Kanton": "FR",
      "Gemeinden": "Corbi_res"
    },
    {
      "PLZ": 1648,
      "Kanton": "FR",
      "Gemeinden": "Hauteville"
    },
    {
      "PLZ": 1649,
      "Kanton": "FR",
      "Gemeinden": "Pont-la-Ville"
    },
    {
      "PLZ": 1651,
      "Kanton": "FR",
      "Gemeinden": "Corbi_res"
    },
    {
      "PLZ": 1652,
      "Kanton": "FR",
      "Gemeinden": "Botterens"
    },
    {
      "PLZ": 1653,
      "Kanton": "FR",
      "Gemeinden": "Ch�tel-sur-Montsalvens, Cr�suz"
    },
    {
      "PLZ": 1654,
      "Kanton": "FR",
      "Gemeinden": "Val-de-Charmey"
    },
    {
      "PLZ": 1656,
      "Kanton": "FR",
      "Gemeinden": "Jaun"
    },
    {
      "PLZ": 1657,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 1658,
      "Kanton": "VD",
      "Gemeinden": "Rossini_re"
    },
    {
      "PLZ": 1659,
      "Kanton": "VD",
      "Gemeinden": "Rougemont"
    },
    {
      "PLZ": 1660,
      "Kanton": "VD",
      "Gemeinden": "Ch�teau-d'Oex"
    },
    {
      "PLZ": 1661,
      "Kanton": "FR",
      "Gemeinden": "Le P�quier (FR)"
    },
    {
      "PLZ": 1663,
      "Kanton": "FR",
      "Gemeinden": "Gruy_res"
    },
    {
      "PLZ": 1665,
      "Kanton": "FR",
      "Gemeinden": "Bas-Intyamon"
    },
    {
      "PLZ": 1666,
      "Kanton": "FR",
      "Gemeinden": "Grandvillard, Bas-Intyamon"
    },
    {
      "PLZ": 1667,
      "Kanton": "FR",
      "Gemeinden": "Bas-Intyamon"
    },
    {
      "PLZ": 1669,
      "Kanton": "FR",
      "Gemeinden": "Haut-Intyamon"
    },
    {
      "PLZ": 1670,
      "Kanton": "FR",
      "Gemeinden": "Ursy"
    },
    {
      "PLZ": 1673,
      "Kanton": "FR",
      "Gemeinden": "Auboranges, Ecublens (FR), Rue"
    },
    {
      "PLZ": 1674,
      "Kanton": "FR",
      "Gemeinden": "Montet (Gl�ne), Ursy"
    },
    {
      "PLZ": 1675,
      "Kanton": "FR",
      "Gemeinden": "Rue, Ursy"
    },
    {
      "PLZ": 1676,
      "Kanton": "FR",
      "Gemeinden": "Siviriez"
    },
    {
      "PLZ": 1677,
      "Kanton": "FR",
      "Gemeinden": "Siviriez"
    },
    {
      "PLZ": 1678,
      "Kanton": "FR",
      "Gemeinden": "Siviriez"
    },
    {
      "PLZ": 1679,
      "Kanton": "FR",
      "Gemeinden": "Siviriez"
    },
    {
      "PLZ": 1680,
      "Kanton": "FR",
      "Gemeinden": "M�zi_res (FR), Romont (FR)"
    },
    {
      "PLZ": 1681,
      "Kanton": "FR",
      "Gemeinden": "Billens-Hennens"
    },
    {
      "PLZ": 1682,
      "Kanton": "VD",
      "Gemeinden": "Valbroye, Dompierre (VD), Lovatens, Pr�vonloup"
    },
    {
      "PLZ": 1683,
      "Kanton": "VD",
      "Gemeinden": "Brenles, Chesalles-sur-Moudon, Sarzens"
    },
    {
      "PLZ": 1684,
      "Kanton": "FR",
      "Gemeinden": "M�zi_res (FR)"
    },
    {
      "PLZ": 1685,
      "Kanton": "FR",
      "Gemeinden": "Vuisternens-devant-Romont"
    },
    {
      "PLZ": 1686,
      "Kanton": "FR",
      "Gemeinden": "Grangettes, Vuisternens-devant-Romont"
    },
    {
      "PLZ": 1687,
      "Kanton": "FR",
      "Gemeinden": "Vuisternens-devant-Romont"
    },
    {
      "PLZ": 1688,
      "Kanton": "FR",
      "Gemeinden": "Vuisternens-devant-Romont"
    },
    {
      "PLZ": 1689,
      "Kanton": "FR",
      "Gemeinden": "Le Ch�telard"
    },
    {
      "PLZ": 1690,
      "Kanton": "FR",
      "Gemeinden": "La Folliaz, Villaz-Saint-Pierre"
    },
    {
      "PLZ": 1691,
      "Kanton": "FR",
      "Gemeinden": "La Folliaz"
    },
    {
      "PLZ": 1692,
      "Kanton": "FR",
      "Gemeinden": "Massonnens"
    },
    {
      "PLZ": 1694,
      "Kanton": "FR",
      "Gemeinden": "Villorsonnens"
    },
    {
      "PLZ": 1695,
      "Kanton": "FR",
      "Gemeinden": "Gibloux"
    },
    {
      "PLZ": 1696,
      "Kanton": "FR",
      "Gemeinden": "Gibloux"
    },
    {
      "PLZ": 1697,
      "Kanton": "FR",
      "Gemeinden": "Vuisternens-devant-Romont"
    },
    {
      "PLZ": 1699,
      "Kanton": "FR",
      "Gemeinden": "Le Flon"
    },
    {
      "PLZ": 1700,
      "Kanton": "FR",
      "Gemeinden": "Fribourg"
    },
    {
      "PLZ": 1712,
      "Kanton": "FR",
      "Gemeinden": "Tafers"
    },
    {
      "PLZ": 1713,
      "Kanton": "FR",
      "Gemeinden": "St. Antoni"
    },
    {
      "PLZ": 1714,
      "Kanton": "FR",
      "Gemeinden": "Heitenried"
    },
    {
      "PLZ": 1715,
      "Kanton": "FR",
      "Gemeinden": "Alterswil"
    },
    {
      "PLZ": 1716,
      "Kanton": "FR",
      "Gemeinden": "Oberschrot, Plaffeien"
    },
    {
      "PLZ": 1717,
      "Kanton": "FR",
      "Gemeinden": "St. Ursen"
    },
    {
      "PLZ": 1718,
      "Kanton": "FR",
      "Gemeinden": "Rechthalten"
    },
    {
      "PLZ": 1719,
      "Kanton": "FR",
      "Gemeinden": "Br�nisried, Zumholz"
    },
    {
      "PLZ": 1720,
      "Kanton": "FR",
      "Gemeinden": "Ch�sopelloz, Corminboeuf"
    },
    {
      "PLZ": 1721,
      "Kanton": "FR",
      "Gemeinden": "Misery-Courtion"
    },
    {
      "PLZ": 1722,
      "Kanton": "FR",
      "Gemeinden": "Fribourg"
    },
    {
      "PLZ": 1723,
      "Kanton": "FR",
      "Gemeinden": "Marly, Pierrafortscha, Villarsel-sur-Marly"
    },
    {
      "PLZ": 1724,
      "Kanton": "FR",
      "Gemeinden": "Le Mouret, Ferpicloz, Sen_des"
    },
    {
      "PLZ": 1725,
      "Kanton": "FR",
      "Gemeinden": "Hauterive (FR)"
    },
    {
      "PLZ": 1726,
      "Kanton": "FR",
      "Gemeinden": "Gibloux"
    },
    {
      "PLZ": 1727,
      "Kanton": "FR",
      "Gemeinden": "Gibloux"
    },
    {
      "PLZ": 1728,
      "Kanton": "FR",
      "Gemeinden": "Gibloux"
    },
    {
      "PLZ": 1730,
      "Kanton": "FR",
      "Gemeinden": "Hauterive (FR)"
    },
    {
      "PLZ": 1731,
      "Kanton": "FR",
      "Gemeinden": "Ependes (FR)"
    },
    {
      "PLZ": 1732,
      "Kanton": "FR",
      "Gemeinden": "Arconciel"
    },
    {
      "PLZ": 1733,
      "Kanton": "FR",
      "Gemeinden": "Treyvaux"
    },
    {
      "PLZ": 1734,
      "Kanton": "FR",
      "Gemeinden": "Tentlingen"
    },
    {
      "PLZ": 1735,
      "Kanton": "FR",
      "Gemeinden": "Giffers"
    },
    {
      "PLZ": 1736,
      "Kanton": "FR",
      "Gemeinden": "St. Silvester"
    },
    {
      "PLZ": 1737,
      "Kanton": "FR",
      "Gemeinden": "Plasselb"
    },
    {
      "PLZ": 1738,
      "Kanton": "BE",
      "Gemeinden": "Guggisberg"
    },
    {
      "PLZ": 1740,
      "Kanton": "FR",
      "Gemeinden": "Neyruz (FR)"
    },
    {
      "PLZ": 1741,
      "Kanton": "FR",
      "Gemeinden": "Cottens (FR)"
    },
    {
      "PLZ": 1742,
      "Kanton": "FR",
      "Gemeinden": "Autigny"
    },
    {
      "PLZ": 1744,
      "Kanton": "FR",
      "Gemeinden": "Ch�nens"
    },
    {
      "PLZ": 1745,
      "Kanton": "FR",
      "Gemeinden": "La Brillaz"
    },
    {
      "PLZ": 1746,
      "Kanton": "FR",
      "Gemeinden": "Prez-vers-Nor�az"
    },
    {
      "PLZ": 1747,
      "Kanton": "FR",
      "Gemeinden": "Corserey"
    },
    {
      "PLZ": 1748,
      "Kanton": "FR",
      "Gemeinden": "Torny"
    },
    {
      "PLZ": 1749,
      "Kanton": "FR",
      "Gemeinden": "Torny"
    },
    {
      "PLZ": 1752,
      "Kanton": "FR",
      "Gemeinden": "Villars-sur-Gl�ne"
    },
    {
      "PLZ": 1753,
      "Kanton": "FR",
      "Gemeinden": "Matran"
    },
    {
      "PLZ": 1754,
      "Kanton": "FR",
      "Gemeinden": "Avry"
    },
    {
      "PLZ": 1756,
      "Kanton": "FR",
      "Gemeinden": "La Brillaz"
    },
    {
      "PLZ": 1757,
      "Kanton": "FR",
      "Gemeinden": "Nor�az"
    },
    {
      "PLZ": 1762,
      "Kanton": "FR",
      "Gemeinden": "Givisiez"
    },
    {
      "PLZ": 1763,
      "Kanton": "FR",
      "Gemeinden": "Granges-Paccot"
    },
    {
      "PLZ": 1772,
      "Kanton": "FR",
      "Gemeinden": "Grolley, Ponthaux"
    },
    {
      "PLZ": 1773,
      "Kanton": "FR",
      "Gemeinden": "Belmont-Broye"
    },
    {
      "PLZ": 1774,
      "Kanton": "FR",
      "Gemeinden": "Montagny (FR)"
    },
    {
      "PLZ": 1775,
      "Kanton": "FR",
      "Gemeinden": "Montagny (FR)"
    },
    {
      "PLZ": 1776,
      "Kanton": "FR",
      "Gemeinden": "Montagny (FR)"
    },
    {
      "PLZ": 1782,
      "Kanton": "FR",
      "Gemeinden": "Belfaux, La Sonnaz"
    },
    {
      "PLZ": 1783,
      "Kanton": "FR",
      "Gemeinden": "Barber_che"
    },
    {
      "PLZ": 1784,
      "Kanton": "FR",
      "Gemeinden": "Courtepin, Wallenried"
    },
    {
      "PLZ": 1785,
      "Kanton": "FR",
      "Gemeinden": "Cressier (FR)"
    },
    {
      "PLZ": 1786,
      "Kanton": "FR",
      "Gemeinden": "Mont-Vully"
    },
    {
      "PLZ": 1787,
      "Kanton": "FR",
      "Gemeinden": "Mont-Vully, Vully-les-Lacs"
    },
    {
      "PLZ": 1788,
      "Kanton": "FR",
      "Gemeinden": "Mont-Vully"
    },
    {
      "PLZ": 1789,
      "Kanton": "FR",
      "Gemeinden": "Mont-Vully"
    },
    {
      "PLZ": 1791,
      "Kanton": "FR",
      "Gemeinden": "Courtepin"
    },
    {
      "PLZ": 1792,
      "Kanton": "FR",
      "Gemeinden": "Gurmels"
    },
    {
      "PLZ": 1793,
      "Kanton": "FR",
      "Gemeinden": "Murten"
    },
    {
      "PLZ": 1794,
      "Kanton": "FR",
      "Gemeinden": "Murten"
    },
    {
      "PLZ": 1795,
      "Kanton": "FR",
      "Gemeinden": "Murten"
    },
    {
      "PLZ": 1796,
      "Kanton": "FR",
      "Gemeinden": "Courgevaux"
    },
    {
      "PLZ": 1797,
      "Kanton": "BE",
      "Gemeinden": "M�nchenwiler"
    },
    {
      "PLZ": 1800,
      "Kanton": "VD",
      "Gemeinden": "Vevey"
    },
    {
      "PLZ": 1801,
      "Kanton": "VD",
      "Gemeinden": "Chardonne"
    },
    {
      "PLZ": 1802,
      "Kanton": "VD",
      "Gemeinden": "Corseaux"
    },
    {
      "PLZ": 1803,
      "Kanton": "VD",
      "Gemeinden": "Chardonne"
    },
    {
      "PLZ": 1804,
      "Kanton": "VD",
      "Gemeinden": "Corsier-sur-Vevey"
    },
    {
      "PLZ": 1805,
      "Kanton": "VD",
      "Gemeinden": "Jongny"
    },
    {
      "PLZ": 1806,
      "Kanton": "VD",
      "Gemeinden": "Saint-L�gier-La Chi�saz"
    },
    {
      "PLZ": 1807,
      "Kanton": "VD",
      "Gemeinden": "Blonay"
    },
    {
      "PLZ": 1808,
      "Kanton": "VD",
      "Gemeinden": "Corsier-sur-Vevey"
    },
    {
      "PLZ": 1809,
      "Kanton": "VD",
      "Gemeinden": "Corsier-sur-Vevey"
    },
    {
      "PLZ": 1814,
      "Kanton": "VD",
      "Gemeinden": "La Tour-de-Peilz"
    },
    {
      "PLZ": 1815,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1816,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1817,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1820,
      "Kanton": "VD",
      "Gemeinden": "Montreux, Veytaux"
    },
    {
      "PLZ": 1822,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1823,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1824,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1832,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1833,
      "Kanton": "VD",
      "Gemeinden": "Montreux"
    },
    {
      "PLZ": 1844,
      "Kanton": "VD",
      "Gemeinden": "Villeneuve (VD)"
    },
    {
      "PLZ": 1845,
      "Kanton": "VD",
      "Gemeinden": "Noville"
    },
    {
      "PLZ": 1846,
      "Kanton": "VD",
      "Gemeinden": "Chessel"
    },
    {
      "PLZ": 1847,
      "Kanton": "VD",
      "Gemeinden": "Rennaz"
    },
    {
      "PLZ": 1852,
      "Kanton": "VD",
      "Gemeinden": "Roche (VD)"
    },
    {
      "PLZ": 1853,
      "Kanton": "VD",
      "Gemeinden": "Yvorne"
    },
    {
      "PLZ": 1854,
      "Kanton": "VD",
      "Gemeinden": "Leysin"
    },
    {
      "PLZ": 1856,
      "Kanton": "VD",
      "Gemeinden": "Corbeyrier"
    },
    {
      "PLZ": 1860,
      "Kanton": "VD",
      "Gemeinden": "Aigle"
    },
    {
      "PLZ": 1862,
      "Kanton": "VD",
      "Gemeinden": "Ormont-Dessous"
    },
    {
      "PLZ": 1863,
      "Kanton": "VD",
      "Gemeinden": "Ormont-Dessous"
    },
    {
      "PLZ": 1864,
      "Kanton": "VD",
      "Gemeinden": "Ormont-Dessus"
    },
    {
      "PLZ": 1865,
      "Kanton": "VD",
      "Gemeinden": "Ormont-Dessus"
    },
    {
      "PLZ": 1866,
      "Kanton": "VD",
      "Gemeinden": "Ormont-Dessous"
    },
    {
      "PLZ": 1867,
      "Kanton": "VD",
      "Gemeinden": "Ollon"
    },
    {
      "PLZ": 1868,
      "Kanton": "VS",
      "Gemeinden": "Collombey-Muraz"
    },
    {
      "PLZ": 1869,
      "Kanton": "VS",
      "Gemeinden": "Massongex"
    },
    {
      "PLZ": 1870,
      "Kanton": "VS",
      "Gemeinden": "Monthey"
    },
    {
      "PLZ": 1871,
      "Kanton": "VS",
      "Gemeinden": "Monthey"
    },
    {
      "PLZ": 1872,
      "Kanton": "VS",
      "Gemeinden": "Troistorrents"
    },
    {
      "PLZ": 1873,
      "Kanton": "VS",
      "Gemeinden": "Val-d'Illiez"
    },
    {
      "PLZ": 1874,
      "Kanton": "VS",
      "Gemeinden": "Champ�ry"
    },
    {
      "PLZ": 1875,
      "Kanton": "VS",
      "Gemeinden": "Troistorrents"
    },
    {
      "PLZ": 1880,
      "Kanton": "VD",
      "Gemeinden": "Bex"
    },
    {
      "PLZ": 1882,
      "Kanton": "VD",
      "Gemeinden": "Gryon"
    },
    {
      "PLZ": 1884,
      "Kanton": "VD",
      "Gemeinden": "Ollon"
    },
    {
      "PLZ": 1885,
      "Kanton": "VD",
      "Gemeinden": "Ollon"
    },
    {
      "PLZ": 1890,
      "Kanton": "VS",
      "Gemeinden": "Saint-MaURce"
    },
    {
      "PLZ": 1891,
      "Kanton": "VS",
      "Gemeinden": "V�rossaz"
    },
    {
      "PLZ": 1892,
      "Kanton": "VD",
      "Gemeinden": "Lavey-Morcles"
    },
    {
      "PLZ": 1893,
      "Kanton": "VS",
      "Gemeinden": "Collombey-Muraz"
    },
    {
      "PLZ": 1895,
      "Kanton": "VS",
      "Gemeinden": "Vionnaz"
    },
    {
      "PLZ": 1896,
      "Kanton": "VS",
      "Gemeinden": "Vouvry"
    },
    {
      "PLZ": 1897,
      "Kanton": "VS",
      "Gemeinden": "Port-Valais"
    },
    {
      "PLZ": 1898,
      "Kanton": "VS",
      "Gemeinden": "Saint-Gingolph"
    },
    {
      "PLZ": 1899,
      "Kanton": "VS",
      "Gemeinden": "Vionnaz"
    },
    {
      "PLZ": 1902,
      "Kanton": "VS",
      "Gemeinden": "Evionnaz"
    },
    {
      "PLZ": 1903,
      "Kanton": "VS",
      "Gemeinden": "Collonges"
    },
    {
      "PLZ": 1904,
      "Kanton": "VS",
      "Gemeinden": "Vernayaz"
    },
    {
      "PLZ": 1905,
      "Kanton": "VS",
      "Gemeinden": "Dor�naz"
    },
    {
      "PLZ": 1906,
      "Kanton": "VS",
      "Gemeinden": "Charrat"
    },
    {
      "PLZ": 1907,
      "Kanton": "VS",
      "Gemeinden": "Saxon"
    },
    {
      "PLZ": 1908,
      "Kanton": "VS",
      "Gemeinden": "Riddes"
    },
    {
      "PLZ": 1911,
      "Kanton": "VS",
      "Gemeinden": "Chamoson, Leytron"
    },
    {
      "PLZ": 1912,
      "Kanton": "VS",
      "Gemeinden": "Leytron"
    },
    {
      "PLZ": 1913,
      "Kanton": "VS",
      "Gemeinden": "Saillon"
    },
    {
      "PLZ": 1914,
      "Kanton": "VS",
      "Gemeinden": "Riddes, Is�rables"
    },
    {
      "PLZ": 1918,
      "Kanton": "VS",
      "Gemeinden": "Riddes"
    },
    {
      "PLZ": 1920,
      "Kanton": "VS",
      "Gemeinden": "Martigny"
    },
    {
      "PLZ": 1921,
      "Kanton": "VS",
      "Gemeinden": "Martigny-Combe"
    },
    {
      "PLZ": 1922,
      "Kanton": "VS",
      "Gemeinden": "Salvan"
    },
    {
      "PLZ": 1923,
      "Kanton": "VS",
      "Gemeinden": "Salvan"
    },
    {
      "PLZ": 1925,
      "Kanton": "VS",
      "Gemeinden": "Finhaut"
    },
    {
      "PLZ": 1926,
      "Kanton": "VS",
      "Gemeinden": "Fully"
    },
    {
      "PLZ": 1927,
      "Kanton": "VS",
      "Gemeinden": "Voll_ges"
    },
    {
      "PLZ": 1928,
      "Kanton": "VS",
      "Gemeinden": "Martigny-Combe"
    },
    {
      "PLZ": 1929,
      "Kanton": "VS",
      "Gemeinden": "Trient"
    },
    {
      "PLZ": 1932,
      "Kanton": "VS",
      "Gemeinden": "Bovernier"
    },
    {
      "PLZ": 1933,
      "Kanton": "VS",
      "Gemeinden": "Sembrancher, Voll_ges"
    },
    {
      "PLZ": 1934,
      "Kanton": "VS",
      "Gemeinden": "Bagnes"
    },
    {
      "PLZ": 1936,
      "Kanton": "VS",
      "Gemeinden": "Bagnes"
    },
    {
      "PLZ": 1937,
      "Kanton": "VS",
      "Gemeinden": "Orsi_res"
    },
    {
      "PLZ": 1938,
      "Kanton": "VS",
      "Gemeinden": "Orsi_res"
    },
    {
      "PLZ": 1941,
      "Kanton": "VS",
      "Gemeinden": "Voll_ges"
    },
    {
      "PLZ": 1942,
      "Kanton": "VS",
      "Gemeinden": "Voll_ges"
    },
    {
      "PLZ": 1943,
      "Kanton": "VS",
      "Gemeinden": "Orsi_res"
    },
    {
      "PLZ": 1944,
      "Kanton": "VS",
      "Gemeinden": "Orsi_res"
    },
    {
      "PLZ": 1945,
      "Kanton": "VS",
      "Gemeinden": "Liddes"
    },
    {
      "PLZ": 1946,
      "Kanton": "VS",
      "Gemeinden": "Bourg-Saint-Pierre"
    },
    {
      "PLZ": 1947,
      "Kanton": "VS",
      "Gemeinden": "Bagnes"
    },
    {
      "PLZ": 1948,
      "Kanton": "VS",
      "Gemeinden": "Bagnes"
    },
    {
      "PLZ": 1950,
      "Kanton": "VS",
      "Gemeinden": "Sion"
    },
    {
      "PLZ": 1955,
      "Kanton": "VS",
      "Gemeinden": "Chamoson"
    },
    {
      "PLZ": 1957,
      "Kanton": "VS",
      "Gemeinden": "Ardon"
    },
    {
      "PLZ": 1958,
      "Kanton": "VS",
      "Gemeinden": "Saint-L�onard, Sion"
    },
    {
      "PLZ": 1961,
      "Kanton": "VS",
      "Gemeinden": "Mont-Noble"
    },
    {
      "PLZ": 1962,
      "Kanton": "VS",
      "Gemeinden": "Sion"
    },
    {
      "PLZ": 1963,
      "Kanton": "VS",
      "Gemeinden": "V�troz"
    },
    {
      "PLZ": 1964,
      "Kanton": "VS",
      "Gemeinden": "Conthey"
    },
    {
      "PLZ": 1965,
      "Kanton": "VS",
      "Gemeinden": "Savi_se"
    },
    {
      "PLZ": 1966,
      "Kanton": "VS",
      "Gemeinden": "Ayent"
    },
    {
      "PLZ": 1967,
      "Kanton": "VS",
      "Gemeinden": "Sion"
    },
    {
      "PLZ": 1968,
      "Kanton": "VS",
      "Gemeinden": "Mont-Noble"
    },
    {
      "PLZ": 1969,
      "Kanton": "VS",
      "Gemeinden": "Saint-Martin (VS)"
    },
    {
      "PLZ": 1971,
      "Kanton": "VS",
      "Gemeinden": "Grimisuat"
    },
    {
      "PLZ": 1972,
      "Kanton": "VS",
      "Gemeinden": "Ayent"
    },
    {
      "PLZ": 1973,
      "Kanton": "VS",
      "Gemeinden": "Mont-Noble"
    },
    {
      "PLZ": 1974,
      "Kanton": "VS",
      "Gemeinden": "Arbaz"
    },
    {
      "PLZ": 1975,
      "Kanton": "VS",
      "Gemeinden": "Conthey"
    },
    {
      "PLZ": 1976,
      "Kanton": "VS",
      "Gemeinden": "Conthey"
    },
    {
      "PLZ": 1977,
      "Kanton": "VS",
      "Gemeinden": "Icogne"
    },
    {
      "PLZ": 1978,
      "Kanton": "VS",
      "Gemeinden": "Lens"
    },
    {
      "PLZ": 1981,
      "Kanton": "VS",
      "Gemeinden": "Vex"
    },
    {
      "PLZ": 1982,
      "Kanton": "VS",
      "Gemeinden": "H�r�mence"
    },
    {
      "PLZ": 1983,
      "Kanton": "VS",
      "Gemeinden": "Evol_ne"
    },
    {
      "PLZ": 1984,
      "Kanton": "VS",
      "Gemeinden": "Evol_ne"
    },
    {
      "PLZ": 1985,
      "Kanton": "VS",
      "Gemeinden": "Evol_ne"
    },
    {
      "PLZ": 1986,
      "Kanton": "VS",
      "Gemeinden": "Evol_ne"
    },
    {
      "PLZ": 1987,
      "Kanton": "VS",
      "Gemeinden": "H�r�mence"
    },
    {
      "PLZ": 1988,
      "Kanton": "VS",
      "Gemeinden": "Vex"
    },
    {
      "PLZ": 1991,
      "Kanton": "VS",
      "Gemeinden": "Sion"
    },
    {
      "PLZ": 1992,
      "Kanton": "VS",
      "Gemeinden": "Les Agettes"
    },
    {
      "PLZ": 1993,
      "Kanton": "VS",
      "Gemeinden": "Nendaz, Veysonnaz"
    },
    {
      "PLZ": 1994,
      "Kanton": "VS",
      "Gemeinden": "Nendaz"
    },
    {
      "PLZ": 1996,
      "Kanton": "VS",
      "Gemeinden": "Nendaz"
    },
    {
      "PLZ": 1997,
      "Kanton": "VS",
      "Gemeinden": "Nendaz"
    },
    {
      "PLZ": 2000,
      "Kanton": "NE",
      "Gemeinden": "Neuch�tel"
    },
    {
      "PLZ": 2012,
      "Kanton": "NE",
      "Gemeinden": "Milvignes"
    },
    {
      "PLZ": 2013,
      "Kanton": "NE",
      "Gemeinden": "Milvignes"
    },
    {
      "PLZ": 2014,
      "Kanton": "NE",
      "Gemeinden": "Milvignes"
    },
    {
      "PLZ": 2015,
      "Kanton": "NE",
      "Gemeinden": "Boudry"
    },
    {
      "PLZ": 2016,
      "Kanton": "NE",
      "Gemeinden": "Cortaillod"
    },
    {
      "PLZ": 2017,
      "Kanton": "NE",
      "Gemeinden": "Boudry"
    },
    {
      "PLZ": 2019,
      "Kanton": "NE",
      "Gemeinden": "Rochefort"
    },
    {
      "PLZ": 2022,
      "Kanton": "NE",
      "Gemeinden": "Bevaix"
    },
    {
      "PLZ": 2023,
      "Kanton": "NE",
      "Gemeinden": "Gorgier"
    },
    {
      "PLZ": 2024,
      "Kanton": "NE",
      "Gemeinden": "Saint-Aubin-Sauges"
    },
    {
      "PLZ": 2025,
      "Kanton": "NE",
      "Gemeinden": "Gorgier"
    },
    {
      "PLZ": 2027,
      "Kanton": "NE",
      "Gemeinden": "Fresens, Montalchez"
    },
    {
      "PLZ": 2028,
      "Kanton": "NE",
      "Gemeinden": "Vaumarcus"
    },
    {
      "PLZ": 2034,
      "Kanton": "NE",
      "Gemeinden": "Peseux"
    },
    {
      "PLZ": 2035,
      "Kanton": "NE",
      "Gemeinden": "Corcelles-Cormondr_che"
    },
    {
      "PLZ": 2036,
      "Kanton": "NE",
      "Gemeinden": "Corcelles-Cormondr_che"
    },
    {
      "PLZ": 2037,
      "Kanton": "NE",
      "Gemeinden": "Rochefort, Val-de-Ruz"
    },
    {
      "PLZ": 2042,
      "Kanton": "NE",
      "Gemeinden": "Valangin"
    },
    {
      "PLZ": 2043,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2046,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2052,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2053,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2054,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2056,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2057,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2058,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2063,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2065,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2067,
      "Kanton": "NE",
      "Gemeinden": "Neuch�tel"
    },
    {
      "PLZ": 2068,
      "Kanton": "NE",
      "Gemeinden": "Hauterive (NE)"
    },
    {
      "PLZ": 2072,
      "Kanton": "NE",
      "Gemeinden": "Saint-Blaise"
    },
    {
      "PLZ": 2073,
      "Kanton": "NE",
      "Gemeinden": "Enges"
    },
    {
      "PLZ": 2074,
      "Kanton": "NE",
      "Gemeinden": "La T_ne"
    },
    {
      "PLZ": 2075,
      "Kanton": "NE",
      "Gemeinden": "La T_ne"
    },
    {
      "PLZ": 2087,
      "Kanton": "NE",
      "Gemeinden": "Cornaux"
    },
    {
      "PLZ": 2088,
      "Kanton": "NE",
      "Gemeinden": "Cressier (NE)"
    },
    {
      "PLZ": 2103,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2105,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2108,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2112,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2113,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2114,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2115,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2116,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2117,
      "Kanton": "NE",
      "Gemeinden": "La C�te-aux-F�es"
    },
    {
      "PLZ": 2123,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2124,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2126,
      "Kanton": "NE",
      "Gemeinden": "Les Verri_res"
    },
    {
      "PLZ": 2127,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Travers"
    },
    {
      "PLZ": 2149,
      "Kanton": "NE",
      "Gemeinden": "Rochefort"
    },
    {
      "PLZ": 2206,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2207,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2208,
      "Kanton": "NE",
      "Gemeinden": "Val-de-Ruz"
    },
    {
      "PLZ": 2300,
      "Kanton": "NE",
      "Gemeinden": "La Chaux-de-Fonds"
    },
    {
      "PLZ": 2314,
      "Kanton": "NE",
      "Gemeinden": "La Sagne"
    },
    {
      "PLZ": 2316,
      "Kanton": "NE",
      "Gemeinden": "Les Ponts-de-Martel"
    },
    {
      "PLZ": 2318,
      "Kanton": "NE",
      "Gemeinden": "Brot-Plamboz"
    },
    {
      "PLZ": 2322,
      "Kanton": "NE",
      "Gemeinden": "La Chaux-de-Fonds"
    },
    {
      "PLZ": 2325,
      "Kanton": "NE",
      "Gemeinden": "Les Planchettes"
    },
    {
      "PLZ": 2333,
      "Kanton": "BE",
      "Gemeinden": "La Ferri_re"
    },
    {
      "PLZ": 2336,
      "Kanton": "JU",
      "Gemeinden": "Les Bois"
    },
    {
      "PLZ": 2338,
      "Kanton": "JU",
      "Gemeinden": "MURaux"
    },
    {
      "PLZ": 2340,
      "Kanton": "JU",
      "Gemeinden": "Le Noirmont"
    },
    {
      "PLZ": 2345,
      "Kanton": "JU",
      "Gemeinden": "La Chaux-des-Breuleux, Saint-Imier, Les Breuleux"
    },
    {
      "PLZ": 2350,
      "Kanton": "JU",
      "Gemeinden": "Saignel�gier"
    },
    {
      "PLZ": 2353,
      "Kanton": "JU",
      "Gemeinden": "Saignel�gier"
    },
    {
      "PLZ": 2354,
      "Kanton": "JU",
      "Gemeinden": "Saignel�gier"
    },
    {
      "PLZ": 2360,
      "Kanton": "JU",
      "Gemeinden": "Le B�mont (JU)"
    },
    {
      "PLZ": 2362,
      "Kanton": "JU",
      "Gemeinden": "Montfaucon"
    },
    {
      "PLZ": 2363,
      "Kanton": "JU",
      "Gemeinden": "Les Enfers"
    },
    {
      "PLZ": 2364,
      "Kanton": "JU",
      "Gemeinden": "Saint-Brais"
    },
    {
      "PLZ": 2400,
      "Kanton": "NE",
      "Gemeinden": ", Le Locle"
    },
    {
      "PLZ": 2405,
      "Kanton": "NE",
      "Gemeinden": "La Chaux-du-Milieu"
    },
    {
      "PLZ": 2406,
      "Kanton": "NE",
      "Gemeinden": "La Br�vine"
    },
    {
      "PLZ": 2414,
      "Kanton": "NE",
      "Gemeinden": "Le Cerneux-P�quignot"
    },
    {
      "PLZ": 2416,
      "Kanton": "NE",
      "Gemeinden": "Les Brenets"
    },
    {
      "PLZ": 2502,
      "Kanton": "BE",
      "Gemeinden": "Biel/Bienne"
    },
    {
      "PLZ": 2503,
      "Kanton": "BE",
      "Gemeinden": "Biel/Bienne"
    },
    {
      "PLZ": 2504,
      "Kanton": "BE",
      "Gemeinden": "Biel/Bienne"
    },
    {
      "PLZ": 2505,
      "Kanton": "BE",
      "Gemeinden": "Biel/Bienne"
    },
    {
      "PLZ": 2512,
      "Kanton": "BE",
      "Gemeinden": "Twann-T�scherz"
    },
    {
      "PLZ": 2513,
      "Kanton": "BE",
      "Gemeinden": "Twann-T�scherz"
    },
    {
      "PLZ": 2514,
      "Kanton": "BE",
      "Gemeinden": "Ligerz"
    },
    {
      "PLZ": 2515,
      "Kanton": "BE",
      "Gemeinden": "Plateau de Diesse"
    },
    {
      "PLZ": 2516,
      "Kanton": "BE",
      "Gemeinden": "Plateau de Diesse"
    },
    {
      "PLZ": 2517,
      "Kanton": "BE",
      "Gemeinden": "Plateau de Diesse"
    },
    {
      "PLZ": 2518,
      "Kanton": "BE",
      "Gemeinden": "Nods"
    },
    {
      "PLZ": 2520,
      "Kanton": "BE",
      "Gemeinden": "La Neuveville"
    },
    {
      "PLZ": 2523,
      "Kanton": "NE",
      "Gemeinden": "Ligni_res"
    },
    {
      "PLZ": 2525,
      "Kanton": "NE",
      "Gemeinden": "Le Landeron"
    },
    {
      "PLZ": 2532,
      "Kanton": "BE",
      "Gemeinden": "Evilard"
    },
    {
      "PLZ": 2533,
      "Kanton": "BE",
      "Gemeinden": "Evilard"
    },
    {
      "PLZ": 2534,
      "Kanton": "BE",
      "Gemeinden": "Orvin"
    },
    {
      "PLZ": 2535,
      "Kanton": "BE",
      "Gemeinden": "Sauge"
    },
    {
      "PLZ": 2536,
      "Kanton": "BE",
      "Gemeinden": "Sauge"
    },
    {
      "PLZ": 2537,
      "Kanton": "BE",
      "Gemeinden": "Sauge"
    },
    {
      "PLZ": 2538,
      "Kanton": "BE",
      "Gemeinden": "Romont (BE)"
    },
    {
      "PLZ": 2540,
      "Kanton": "SO",
      "Gemeinden": "Grenchen"
    },
    {
      "PLZ": 2542,
      "Kanton": "BE",
      "Gemeinden": "Pieterlen"
    },
    {
      "PLZ": 2543,
      "Kanton": "BE",
      "Gemeinden": "Lengnau (BE)"
    },
    {
      "PLZ": 2544,
      "Kanton": "SO",
      "Gemeinden": "Bettlach"
    },
    {
      "PLZ": 2545,
      "Kanton": "SO",
      "Gemeinden": "Selzach"
    },
    {
      "PLZ": 2552,
      "Kanton": "BE",
      "Gemeinden": "Orpund"
    },
    {
      "PLZ": 2553,
      "Kanton": "BE",
      "Gemeinden": "Safnern"
    },
    {
      "PLZ": 2554,
      "Kanton": "BE",
      "Gemeinden": "Meinisberg"
    },
    {
      "PLZ": 2555,
      "Kanton": "BE",
      "Gemeinden": "Br�gg"
    },
    {
      "PLZ": 2556,
      "Kanton": "BE",
      "Gemeinden": "Scheuren, Schwadernau"
    },
    {
      "PLZ": 2557,
      "Kanton": "BE",
      "Gemeinden": "Studen (BE)"
    },
    {
      "PLZ": 2558,
      "Kanton": "BE",
      "Gemeinden": "Aegerten"
    },
    {
      "PLZ": 2560,
      "Kanton": "BE",
      "Gemeinden": "Nidau"
    },
    {
      "PLZ": 2562,
      "Kanton": "BE",
      "Gemeinden": "Port"
    },
    {
      "PLZ": 2563,
      "Kanton": "BE",
      "Gemeinden": "Ipsach"
    },
    {
      "PLZ": 2564,
      "Kanton": "BE",
      "Gemeinden": "Bellmund"
    },
    {
      "PLZ": 2565,
      "Kanton": "BE",
      "Gemeinden": "Jens"
    },
    {
      "PLZ": 2572,
      "Kanton": "BE",
      "Gemeinden": "M�rigen, Sutz-Lattrigen"
    },
    {
      "PLZ": 2575,
      "Kanton": "BE",
      "Gemeinden": "T�uffelen, Hagneck"
    },
    {
      "PLZ": 2576,
      "Kanton": "BE",
      "Gemeinden": "L�scherz"
    },
    {
      "PLZ": 2577,
      "Kanton": "BE",
      "Gemeinden": "Finsterhennen, Siselen"
    },
    {
      "PLZ": 2603,
      "Kanton": "BE",
      "Gemeinden": "P�ry-La Heutte"
    },
    {
      "PLZ": 2604,
      "Kanton": "BE",
      "Gemeinden": "P�ry-La Heutte"
    },
    {
      "PLZ": 2605,
      "Kanton": "BE",
      "Gemeinden": "Sonceboz-Sombeval"
    },
    {
      "PLZ": 2606,
      "Kanton": "BE",
      "Gemeinden": "Corg�mont"
    },
    {
      "PLZ": 2607,
      "Kanton": "BE",
      "Gemeinden": "Cort�bert"
    },
    {
      "PLZ": 2608,
      "Kanton": "BE",
      "Gemeinden": "Courtelary, Cort�bert"
    },
    {
      "PLZ": 2610,
      "Kanton": "BE",
      "Gemeinden": "Saint-Imier, Cormoret"
    },
    {
      "PLZ": 2612,
      "Kanton": "BE",
      "Gemeinden": "Cormoret"
    },
    {
      "PLZ": 2613,
      "Kanton": "BE",
      "Gemeinden": "Villeret"
    },
    {
      "PLZ": 2615,
      "Kanton": "BE",
      "Gemeinden": "Sonvilier"
    },
    {
      "PLZ": 2616,
      "Kanton": "BE",
      "Gemeinden": "Renan (BE)"
    },
    {
      "PLZ": 2710,
      "Kanton": "BE",
      "Gemeinden": "Tavannes"
    },
    {
      "PLZ": 2712,
      "Kanton": "BE",
      "Gemeinden": "Saicourt"
    },
    {
      "PLZ": 2713,
      "Kanton": "BE",
      "Gemeinden": "Saicourt"
    },
    {
      "PLZ": 2714,
      "Kanton": "JU",
      "Gemeinden": "Les Genevez (JU)"
    },
    {
      "PLZ": 2715,
      "Kanton": "BE",
      "Gemeinden": "Petit-Val"
    },
    {
      "PLZ": 2716,
      "Kanton": "BE",
      "Gemeinden": "Petit-Val"
    },
    {
      "PLZ": 2717,
      "Kanton": "BE",
      "Gemeinden": "Petit-Val, Reb�velier"
    },
    {
      "PLZ": 2718,
      "Kanton": "JU",
      "Gemeinden": "Lajoux (JU)"
    },
    {
      "PLZ": 2720,
      "Kanton": "BE",
      "Gemeinden": "Tavannes, Tramelan"
    },
    {
      "PLZ": 2722,
      "Kanton": "BE",
      "Gemeinden": "Tramelan"
    },
    {
      "PLZ": 2723,
      "Kanton": "BE",
      "Gemeinden": "Mont-Tramelan"
    },
    {
      "PLZ": 2732,
      "Kanton": "BE",
      "Gemeinden": "Loveresse, Reconvilier, Saicourt, Saules (BE)"
    },
    {
      "PLZ": 2733,
      "Kanton": "BE",
      "Gemeinden": "Valbirse"
    },
    {
      "PLZ": 2735,
      "Kanton": "BE",
      "Gemeinden": "Valbirse, Champoz"
    },
    {
      "PLZ": 2736,
      "Kanton": "BE",
      "Gemeinden": "Sorvilier"
    },
    {
      "PLZ": 2738,
      "Kanton": "BE",
      "Gemeinden": "Court"
    },
    {
      "PLZ": 2740,
      "Kanton": "BE",
      "Gemeinden": "Moutier"
    },
    {
      "PLZ": 2742,
      "Kanton": "BE",
      "Gemeinden": "Perrefitte"
    },
    {
      "PLZ": 2743,
      "Kanton": "BE",
      "Gemeinden": "Eschert"
    },
    {
      "PLZ": 2744,
      "Kanton": "BE",
      "Gemeinden": "Belprahon"
    },
    {
      "PLZ": 2745,
      "Kanton": "BE",
      "Gemeinden": "Grandval"
    },
    {
      "PLZ": 2746,
      "Kanton": "BE",
      "Gemeinden": "Cr�mines"
    },
    {
      "PLZ": 2747,
      "Kanton": "BE",
      "Gemeinden": "Corcelles (BE), Seehof"
    },
    {
      "PLZ": 2748,
      "Kanton": "BE",
      "Gemeinden": "Petit-Val"
    },
    {
      "PLZ": 2762,
      "Kanton": "BE",
      "Gemeinden": "Roches (BE)"
    },
    {
      "PLZ": 2800,
      "Kanton": "JU",
      "Gemeinden": "Del�mont"
    },
    {
      "PLZ": 2802,
      "Kanton": "JU",
      "Gemeinden": "Develier"
    },
    {
      "PLZ": 2803,
      "Kanton": "JU",
      "Gemeinden": "Bourrignon"
    },
    {
      "PLZ": 2805,
      "Kanton": "JU",
      "Gemeinden": "Soyhi_res"
    },
    {
      "PLZ": 2806,
      "Kanton": "JU",
      "Gemeinden": "Mettembert"
    },
    {
      "PLZ": 2807,
      "Kanton": "JU",
      "Gemeinden": "Pleigne"
    },
    {
      "PLZ": 2812,
      "Kanton": "JU",
      "Gemeinden": "Movelier"
    },
    {
      "PLZ": 2813,
      "Kanton": "JU",
      "Gemeinden": "Ederswiler"
    },
    {
      "PLZ": 2814,
      "Kanton": "BL",
      "Gemeinden": "Roggenburg"
    },
    {
      "PLZ": 2822,
      "Kanton": "JU",
      "Gemeinden": "Courroux"
    },
    {
      "PLZ": 2823,
      "Kanton": "JU",
      "Gemeinden": "Courroux"
    },
    {
      "PLZ": 2824,
      "Kanton": "JU",
      "Gemeinden": "Val Terbi"
    },
    {
      "PLZ": 2825,
      "Kanton": "JU",
      "Gemeinden": "Courchapoix"
    },
    {
      "PLZ": 2826,
      "Kanton": "JU",
      "Gemeinden": "Corban"
    },
    {
      "PLZ": 2827,
      "Kanton": "JU",
      "Gemeinden": "Mervelier, Schelten"
    },
    {
      "PLZ": 2828,
      "Kanton": "JU",
      "Gemeinden": "Val Terbi"
    },
    {
      "PLZ": 2829,
      "Kanton": "JU",
      "Gemeinden": "Val Terbi"
    },
    {
      "PLZ": 2830,
      "Kanton": "JU",
      "Gemeinden": "Courrendlin, Vellerat"
    },
    {
      "PLZ": 2832,
      "Kanton": "JU",
      "Gemeinden": "Rebeuvelier"
    },
    {
      "PLZ": 2842,
      "Kanton": "JU",
      "Gemeinden": "Rossemaison"
    },
    {
      "PLZ": 2843,
      "Kanton": "JU",
      "Gemeinden": "Ch�tillon (JU)"
    },
    {
      "PLZ": 2852,
      "Kanton": "JU",
      "Gemeinden": "Court�telle"
    },
    {
      "PLZ": 2853,
      "Kanton": "JU",
      "Gemeinden": "Haute-Sorne"
    },
    {
      "PLZ": 2854,
      "Kanton": "JU",
      "Gemeinden": "Haute-Sorne"
    },
    {
      "PLZ": 2855,
      "Kanton": "JU",
      "Gemeinden": "Haute-Sorne"
    },
    {
      "PLZ": 2856,
      "Kanton": "JU",
      "Gemeinden": "Bo�court"
    },
    {
      "PLZ": 2857,
      "Kanton": "JU",
      "Gemeinden": "Bo�court"
    },
    {
      "PLZ": 2863,
      "Kanton": "JU",
      "Gemeinden": "Haute-Sorne"
    },
    {
      "PLZ": 2864,
      "Kanton": "JU",
      "Gemeinden": "Haute-Sorne"
    },
    {
      "PLZ": 2873,
      "Kanton": "JU",
      "Gemeinden": "Saulcy"
    },
    {
      "PLZ": 2882,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs, Saint-Brais"
    },
    {
      "PLZ": 2883,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2884,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2885,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2886,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2887,
      "Kanton": "JU",
      "Gemeinden": "Soubey"
    },
    {
      "PLZ": 2888,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2889,
      "Kanton": "JU",
      "Gemeinden": "Clos du Doubs"
    },
    {
      "PLZ": 2900,
      "Kanton": "JU",
      "Gemeinden": "Porrentruy"
    },
    {
      "PLZ": 2902,
      "Kanton": "JU",
      "Gemeinden": "Fontenais"
    },
    {
      "PLZ": 2903,
      "Kanton": "JU",
      "Gemeinden": "Fontenais"
    },
    {
      "PLZ": 2904,
      "Kanton": "JU",
      "Gemeinden": "Fontenais"
    },
    {
      "PLZ": 2905,
      "Kanton": "JU",
      "Gemeinden": "Courtedoux"
    },
    {
      "PLZ": 2906,
      "Kanton": "JU",
      "Gemeinden": "Haute-Ajoie"
    },
    {
      "PLZ": 2907,
      "Kanton": "JU",
      "Gemeinden": "Rocourt"
    },
    {
      "PLZ": 2908,
      "Kanton": "JU",
      "Gemeinden": "Grandfontaine"
    },
    {
      "PLZ": 2912,
      "Kanton": "JU",
      "Gemeinden": "Haute-Ajoie"
    },
    {
      "PLZ": 2914,
      "Kanton": "JU",
      "Gemeinden": "Haute-Ajoie"
    },
    {
      "PLZ": 2915,
      "Kanton": "JU",
      "Gemeinden": "Bure"
    },
    {
      "PLZ": 2916,
      "Kanton": "JU",
      "Gemeinden": "Fahy"
    },
    {
      "PLZ": 2922,
      "Kanton": "JU",
      "Gemeinden": "Courchavon"
    },
    {
      "PLZ": 2923,
      "Kanton": "JU",
      "Gemeinden": "Basse-Allaine"
    },
    {
      "PLZ": 2924,
      "Kanton": "JU",
      "Gemeinden": "Basse-Allaine"
    },
    {
      "PLZ": 2925,
      "Kanton": "JU",
      "Gemeinden": "Basse-Allaine"
    },
    {
      "PLZ": 2926,
      "Kanton": "JU",
      "Gemeinden": "Boncourt"
    },
    {
      "PLZ": 2932,
      "Kanton": "JU",
      "Gemeinden": "Coeuve"
    },
    {
      "PLZ": 2933,
      "Kanton": "JU",
      "Gemeinden": "Damphreux, Lugnez"
    },
    {
      "PLZ": 2935,
      "Kanton": "JU",
      "Gemeinden": "Beurnev�sin"
    },
    {
      "PLZ": 2942,
      "Kanton": "JU",
      "Gemeinden": "Alle"
    },
    {
      "PLZ": 2943,
      "Kanton": "JU",
      "Gemeinden": "Vendlincourt"
    },
    {
      "PLZ": 2944,
      "Kanton": "JU",
      "Gemeinden": "Bonfol"
    },
    {
      "PLZ": 2946,
      "Kanton": "JU",
      "Gemeinden": "La Baroche"
    },
    {
      "PLZ": 2947,
      "Kanton": "JU",
      "Gemeinden": "La Baroche"
    },
    {
      "PLZ": 2950,
      "Kanton": "JU",
      "Gemeinden": "Courgenay"
    },
    {
      "PLZ": 2952,
      "Kanton": "JU",
      "Gemeinden": "Cornol"
    },
    {
      "PLZ": 2953,
      "Kanton": "JU",
      "Gemeinden": "La Baroche"
    },
    {
      "PLZ": 2954,
      "Kanton": "JU",
      "Gemeinden": "La Baroche"
    },
    {
      "PLZ": 3004,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3005,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3006,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3007,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3008,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3010,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3011,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3012,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3013,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3014,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3015,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3018,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3019,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3020,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3027,
      "Kanton": "BE",
      "Gemeinden": "BE"
    },
    {
      "PLZ": 3032,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3033,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3034,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3035,
      "Kanton": "BE",
      "Gemeinden": "Seedorf (BE)"
    },
    {
      "PLZ": 3036,
      "Kanton": "BE",
      "Gemeinden": "Radelfingen"
    },
    {
      "PLZ": 3037,
      "Kanton": "BE",
      "Gemeinden": "Kirchlindach"
    },
    {
      "PLZ": 3038,
      "Kanton": "BE",
      "Gemeinden": "Kirchlindach"
    },
    {
      "PLZ": 3042,
      "Kanton": "BE",
      "Gemeinden": "Meikirch"
    },
    {
      "PLZ": 3043,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3044,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3045,
      "Kanton": "BE",
      "Gemeinden": "Meikirch"
    },
    {
      "PLZ": 3046,
      "Kanton": "BE",
      "Gemeinden": "Meikirch"
    },
    {
      "PLZ": 3047,
      "Kanton": "BE",
      "Gemeinden": "Bremgarten bei BE"
    },
    {
      "PLZ": 3048,
      "Kanton": "BE",
      "Gemeinden": "Ittigen"
    },
    {
      "PLZ": 3049,
      "Kanton": "BE",
      "Gemeinden": "Wohlen bei BE"
    },
    {
      "PLZ": 3052,
      "Kanton": "BE",
      "Gemeinden": "Zollikofen"
    },
    {
      "PLZ": 3053,
      "Kanton": "BE",
      "Gemeinden": "Deisswil bei M�nchenbuchsee, Diemerswil, Rapperswil (BE), M�nchenbuchsee, Wiggiswil"
    },
    {
      "PLZ": 3054,
      "Kanton": "BE",
      "Gemeinden": "Sch�pfen"
    },
    {
      "PLZ": 3063,
      "Kanton": "BE",
      "Gemeinden": "Ittigen"
    },
    {
      "PLZ": 3065,
      "Kanton": "BE",
      "Gemeinden": "Bolligen"
    },
    {
      "PLZ": 3066,
      "Kanton": "BE",
      "Gemeinden": "Stettlen"
    },
    {
      "PLZ": 3067,
      "Kanton": "BE",
      "Gemeinden": "Vechigen"
    },
    {
      "PLZ": 3068,
      "Kanton": "BE",
      "Gemeinden": "Vechigen"
    },
    {
      "PLZ": 3072,
      "Kanton": "BE",
      "Gemeinden": "Ostermundigen"
    },
    {
      "PLZ": 3073,
      "Kanton": "BE",
      "Gemeinden": "MUR bei BE"
    },
    {
      "PLZ": 3074,
      "Kanton": "BE",
      "Gemeinden": "MUR bei BE"
    },
    {
      "PLZ": 3075,
      "Kanton": "BE",
      "Gemeinden": "Worb"
    },
    {
      "PLZ": 3076,
      "Kanton": "BE",
      "Gemeinden": "Worb"
    },
    {
      "PLZ": 3077,
      "Kanton": "BE",
      "Gemeinden": "Worb"
    },
    {
      "PLZ": 3078,
      "Kanton": "BE",
      "Gemeinden": "Worb"
    },
    {
      "PLZ": 3082,
      "Kanton": "BE",
      "Gemeinden": "Schlosswil"
    },
    {
      "PLZ": 3083,
      "Kanton": "BE",
      "Gemeinden": "M�nsingen"
    },
    {
      "PLZ": 3084,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3086,
      "Kanton": "BE",
      "Gemeinden": "Wald (BE)"
    },
    {
      "PLZ": 3087,
      "Kanton": "BE",
      "Gemeinden": "Niedermuhlern"
    },
    {
      "PLZ": 3088,
      "Kanton": "BE",
      "Gemeinden": "R�eggisberg"
    },
    {
      "PLZ": 3089,
      "Kanton": "BE",
      "Gemeinden": "R�eggisberg"
    },
    {
      "PLZ": 3095,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3096,
      "Kanton": "BE",
      "Gemeinden": "Oberbalm"
    },
    {
      "PLZ": 3097,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3098,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3099,
      "Kanton": "BE",
      "Gemeinden": "Riggisberg"
    },
    {
      "PLZ": 3110,
      "Kanton": "BE",
      "Gemeinden": "M�nsingen"
    },
    {
      "PLZ": 3111,
      "Kanton": "BE",
      "Gemeinden": "T�gertschi"
    },
    {
      "PLZ": 3112,
      "Kanton": "BE",
      "Gemeinden": "Allmendingen"
    },
    {
      "PLZ": 3113,
      "Kanton": "BE",
      "Gemeinden": "Rubigen"
    },
    {
      "PLZ": 3114,
      "Kanton": "BE",
      "Gemeinden": "Wichtrach"
    },
    {
      "PLZ": 3115,
      "Kanton": "BE",
      "Gemeinden": "Gerzensee"
    },
    {
      "PLZ": 3116,
      "Kanton": "BE",
      "Gemeinden": "Kirchdorf (BE), M�hledorf (BE), Noflen"
    },
    {
      "PLZ": 3122,
      "Kanton": "BE",
      "Gemeinden": "Kehrsatz"
    },
    {
      "PLZ": 3123,
      "Kanton": "BE",
      "Gemeinden": "Belp"
    },
    {
      "PLZ": 3124,
      "Kanton": "BE",
      "Gemeinden": "Belp"
    },
    {
      "PLZ": 3125,
      "Kanton": "BE",
      "Gemeinden": "Toffen"
    },
    {
      "PLZ": 3126,
      "Kanton": "BE",
      "Gemeinden": "Gelterfingen, Kaufdorf"
    },
    {
      "PLZ": 3127,
      "Kanton": "BE",
      "Gemeinden": "Lohnstorf, M�hlethurnen"
    },
    {
      "PLZ": 3128,
      "Kanton": "BE",
      "Gemeinden": "Kirchenthurnen, R�mligen"
    },
    {
      "PLZ": 3132,
      "Kanton": "BE",
      "Gemeinden": "Riggisberg"
    },
    {
      "PLZ": 3144,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3145,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3147,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3148,
      "Kanton": "BE",
      "Gemeinden": "Schwarzenburg"
    },
    {
      "PLZ": 3150,
      "Kanton": "BE",
      "Gemeinden": "Schwarzenburg"
    },
    {
      "PLZ": 3152,
      "Kanton": "BE",
      "Gemeinden": "Schwarzenburg"
    },
    {
      "PLZ": 3153,
      "Kanton": "BE",
      "Gemeinden": "R�schegg"
    },
    {
      "PLZ": 3154,
      "Kanton": "BE",
      "Gemeinden": "R�schegg"
    },
    {
      "PLZ": 3155,
      "Kanton": "BE",
      "Gemeinden": "R�eggisberg"
    },
    {
      "PLZ": 3156,
      "Kanton": "BE",
      "Gemeinden": "Guggisberg"
    },
    {
      "PLZ": 3157,
      "Kanton": "BE",
      "Gemeinden": "Schwarzenburg"
    },
    {
      "PLZ": 3158,
      "Kanton": "BE",
      "Gemeinden": "Guggisberg"
    },
    {
      "PLZ": 3159,
      "Kanton": "BE",
      "Gemeinden": "Guggisberg"
    },
    {
      "PLZ": 3172,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3173,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3174,
      "Kanton": "BE",
      "Gemeinden": "K�niz"
    },
    {
      "PLZ": 3175,
      "Kanton": "FR",
      "Gemeinden": "W�nnewil-Flamatt"
    },
    {
      "PLZ": 3176,
      "Kanton": "BE",
      "Gemeinden": "Neuenegg"
    },
    {
      "PLZ": 3177,
      "Kanton": "BE",
      "Gemeinden": "Laupen"
    },
    {
      "PLZ": 3178,
      "Kanton": "FR",
      "Gemeinden": "B�singen"
    },
    {
      "PLZ": 3179,
      "Kanton": "BE",
      "Gemeinden": "Kriechenwil"
    },
    {
      "PLZ": 3182,
      "Kanton": "FR",
      "Gemeinden": "Ueberstorf"
    },
    {
      "PLZ": 3183,
      "Kanton": "BE",
      "Gemeinden": "Schwarzenburg"
    },
    {
      "PLZ": 3184,
      "Kanton": "FR",
      "Gemeinden": "W�nnewil-Flamatt"
    },
    {
      "PLZ": 3185,
      "Kanton": "FR",
      "Gemeinden": "Schmitten (FR)"
    },
    {
      "PLZ": 3186,
      "Kanton": "FR",
      "Gemeinden": "D�dingen"
    },
    {
      "PLZ": 3202,
      "Kanton": "BE",
      "Gemeinden": "Frauenkappelen"
    },
    {
      "PLZ": 3203,
      "Kanton": "BE",
      "Gemeinden": "M�hleberg"
    },
    {
      "PLZ": 3204,
      "Kanton": "BE",
      "Gemeinden": "M�hleberg"
    },
    {
      "PLZ": 3205,
      "Kanton": "BE",
      "Gemeinden": "M�hleberg"
    },
    {
      "PLZ": 3206,
      "Kanton": "BE",
      "Gemeinden": "Ferenbalm, Gurmels"
    },
    {
      "PLZ": 3207,
      "Kanton": "BE",
      "Gemeinden": "Golaten, Wileroltigen"
    },
    {
      "PLZ": 3208,
      "Kanton": "BE",
      "Gemeinden": "Gurbr�"
    },
    {
      "PLZ": 3210,
      "Kanton": "FR",
      "Gemeinden": "Kerzers"
    },
    {
      "PLZ": 3212,
      "Kanton": "FR",
      "Gemeinden": "Gurmels"
    },
    {
      "PLZ": 3213,
      "Kanton": "FR",
      "Gemeinden": "Kleinb�singen, Gurmels"
    },
    {
      "PLZ": 3214,
      "Kanton": "FR",
      "Gemeinden": "Ulmiz"
    },
    {
      "PLZ": 3215,
      "Kanton": "FR",
      "Gemeinden": "Murten, Gempenach"
    },
    {
      "PLZ": 3216,
      "Kanton": "FR",
      "Gemeinden": "Ried bei Kerzers"
    },
    {
      "PLZ": 3225,
      "Kanton": "BE",
      "Gemeinden": "M�ntschemier"
    },
    {
      "PLZ": 3226,
      "Kanton": "BE",
      "Gemeinden": "Treiten"
    },
    {
      "PLZ": 3232,
      "Kanton": "BE",
      "Gemeinden": "Ins"
    },
    {
      "PLZ": 3233,
      "Kanton": "BE",
      "Gemeinden": "Tschugg"
    },
    {
      "PLZ": 3234,
      "Kanton": "BE",
      "Gemeinden": "Vinelz"
    },
    {
      "PLZ": 3235,
      "Kanton": "BE",
      "Gemeinden": "Erlach"
    },
    {
      "PLZ": 3236,
      "Kanton": "BE",
      "Gemeinden": "Gampelen"
    },
    {
      "PLZ": 3237,
      "Kanton": "BE",
      "Gemeinden": "Br�ttelen"
    },
    {
      "PLZ": 3238,
      "Kanton": "BE",
      "Gemeinden": "Gals"
    },
    {
      "PLZ": 3250,
      "Kanton": "BE",
      "Gemeinden": "Lyss"
    },
    {
      "PLZ": 3251,
      "Kanton": "BE",
      "Gemeinden": "Rapperswil (BE), Wengi"
    },
    {
      "PLZ": 3252,
      "Kanton": "BE",
      "Gemeinden": "Worben"
    },
    {
      "PLZ": 3253,
      "Kanton": "SO",
      "Gemeinden": "Schnottwil"
    },
    {
      "PLZ": 3254,
      "Kanton": "SO",
      "Gemeinden": "Messen"
    },
    {
      "PLZ": 3255,
      "Kanton": "BE",
      "Gemeinden": "Rapperswil (BE)"
    },
    {
      "PLZ": 3256,
      "Kanton": "BE",
      "Gemeinden": "Rapperswil (BE)"
    },
    {
      "PLZ": 3257,
      "Kanton": "BE",
      "Gemeinden": "Grossaffoltern"
    },
    {
      "PLZ": 3262,
      "Kanton": "BE",
      "Gemeinden": "Grossaffoltern"
    },
    {
      "PLZ": 3263,
      "Kanton": "BE",
      "Gemeinden": "B�etigen"
    },
    {
      "PLZ": 3264,
      "Kanton": "BE",
      "Gemeinden": "Diessbach bei B�ren"
    },
    {
      "PLZ": 3266,
      "Kanton": "BE",
      "Gemeinden": "Seedorf (BE)"
    },
    {
      "PLZ": 3267,
      "Kanton": "BE",
      "Gemeinden": "Seedorf (BE)"
    },
    {
      "PLZ": 3268,
      "Kanton": "BE",
      "Gemeinden": "Seedorf (BE)"
    },
    {
      "PLZ": 3270,
      "Kanton": "BE",
      "Gemeinden": "Aarberg"
    },
    {
      "PLZ": 3271,
      "Kanton": "BE",
      "Gemeinden": "Radelfingen"
    },
    {
      "PLZ": 3272,
      "Kanton": "BE",
      "Gemeinden": "Epsach, Walperswil"
    },
    {
      "PLZ": 3273,
      "Kanton": "BE",
      "Gemeinden": "Kappelen"
    },
    {
      "PLZ": 3274,
      "Kanton": "BE",
      "Gemeinden": "B�hl, Hermrigen, Merzligen"
    },
    {
      "PLZ": 3280,
      "Kanton": "FR",
      "Gemeinden": "Greng, Meyriez, Murten"
    },
    {
      "PLZ": 3282,
      "Kanton": "BE",
      "Gemeinden": "Bargen (BE)"
    },
    {
      "PLZ": 3283,
      "Kanton": "BE",
      "Gemeinden": "Kallnach"
    },
    {
      "PLZ": 3284,
      "Kanton": "FR",
      "Gemeinden": "Fr�schels"
    },
    {
      "PLZ": 3285,
      "Kanton": "FR",
      "Gemeinden": "Galmiz"
    },
    {
      "PLZ": 3286,
      "Kanton": "FR",
      "Gemeinden": "Muntelier"
    },
    {
      "PLZ": 3292,
      "Kanton": "BE",
      "Gemeinden": "Lyss"
    },
    {
      "PLZ": 3293,
      "Kanton": "BE",
      "Gemeinden": "Dotzigen"
    },
    {
      "PLZ": 3294,
      "Kanton": "BE",
      "Gemeinden": "B�ren an der Aare, Meienried"
    },
    {
      "PLZ": 3295,
      "Kanton": "BE",
      "Gemeinden": "R�ti bei B�ren"
    },
    {
      "PLZ": 3296,
      "Kanton": "BE",
      "Gemeinden": "Arch"
    },
    {
      "PLZ": 3297,
      "Kanton": "BE",
      "Gemeinden": "Leuzigen"
    },
    {
      "PLZ": 3298,
      "Kanton": "BE",
      "Gemeinden": "Oberwil bei B�ren"
    },
    {
      "PLZ": 3302,
      "Kanton": "BE",
      "Gemeinden": "Moosseedorf"
    },
    {
      "PLZ": 3303,
      "Kanton": "BE",
      "Gemeinden": "Jegenstorf, Zuzwil (BE)"
    },
    {
      "PLZ": 3305,
      "Kanton": "BE",
      "Gemeinden": "Iffwil, Jegenstorf"
    },
    {
      "PLZ": 3306,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3307,
      "Kanton": "SO",
      "Gemeinden": "Messen"
    },
    {
      "PLZ": 3308,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3309,
      "Kanton": "BE",
      "Gemeinden": "Kernenried, Fraubrunnen"
    },
    {
      "PLZ": 3312,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3313,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3314,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3315,
      "Kanton": "BE",
      "Gemeinden": "B�tterkinden"
    },
    {
      "PLZ": 3317,
      "Kanton": "BE",
      "Gemeinden": "Fraubrunnen"
    },
    {
      "PLZ": 3322,
      "Kanton": "BE",
      "Gemeinden": "Mattstetten, Urtenen-Sch�nb�hl"
    },
    {
      "PLZ": 3323,
      "Kanton": "BE",
      "Gemeinden": "B�riswil"
    },
    {
      "PLZ": 3324,
      "Kanton": "BE",
      "Gemeinden": "Hindelbank, M�tschwil"
    },
    {
      "PLZ": 3325,
      "Kanton": "BE",
      "Gemeinden": "Krauchthal"
    },
    {
      "PLZ": 3326,
      "Kanton": "BE",
      "Gemeinden": "Krauchthal"
    },
    {
      "PLZ": 3360,
      "Kanton": "BE",
      "Gemeinden": "Herzogenbuchsee"
    },
    {
      "PLZ": 3362,
      "Kanton": "BE",
      "Gemeinden": "Nieder�nz"
    },
    {
      "PLZ": 3363,
      "Kanton": "BE",
      "Gemeinden": "Herzogenbuchsee"
    },
    {
      "PLZ": 3365,
      "Kanton": "BE",
      "Gemeinden": "Seeberg"
    },
    {
      "PLZ": 3366,
      "Kanton": "BE",
      "Gemeinden": "Bettenhausen"
    },
    {
      "PLZ": 3367,
      "Kanton": "BE",
      "Gemeinden": "Ochlenberg, Th�rigen"
    },
    {
      "PLZ": 3368,
      "Kanton": "BE",
      "Gemeinden": "Bleienbach"
    },
    {
      "PLZ": 3372,
      "Kanton": "BE",
      "Gemeinden": "Heimenhausen"
    },
    {
      "PLZ": 3373,
      "Kanton": "BE",
      "Gemeinden": "Heimenhausen"
    },
    {
      "PLZ": 3374,
      "Kanton": "BE",
      "Gemeinden": "Wangenried"
    },
    {
      "PLZ": 3375,
      "Kanton": "BE",
      "Gemeinden": "Inkwil"
    },
    {
      "PLZ": 3376,
      "Kanton": "BE",
      "Gemeinden": "Berken, Graben"
    },
    {
      "PLZ": 3377,
      "Kanton": "BE",
      "Gemeinden": "VSwil bei Wangen"
    },
    {
      "PLZ": 3380,
      "Kanton": "BE",
      "Gemeinden": "VSwil bei Niederbipp, Wangen an der Aare"
    },
    {
      "PLZ": 3400,
      "Kanton": "BE",
      "Gemeinden": "Burgdorf"
    },
    {
      "PLZ": 3412,
      "Kanton": "BE",
      "Gemeinden": "Heimiswil"
    },
    {
      "PLZ": 3413,
      "Kanton": "BE",
      "Gemeinden": "Heimiswil"
    },
    {
      "PLZ": 3414,
      "Kanton": "BE",
      "Gemeinden": "Oberburg"
    },
    {
      "PLZ": 3415,
      "Kanton": "BE",
      "Gemeinden": "Hasle bei Burgdorf, R�egsau"
    },
    {
      "PLZ": 3416,
      "Kanton": "BE",
      "Gemeinden": "Affoltern im Emmental"
    },
    {
      "PLZ": 3417,
      "Kanton": "BE",
      "Gemeinden": "R�egsau"
    },
    {
      "PLZ": 3418,
      "Kanton": "BE",
      "Gemeinden": "R�egsau"
    },
    {
      "PLZ": 3419,
      "Kanton": "BE",
      "Gemeinden": "Hasle bei Burgdorf"
    },
    {
      "PLZ": 3421,
      "Kanton": "BE",
      "Gemeinden": "Lyssach, Oberburg, R�ti bei Lyssach"
    },
    {
      "PLZ": 3422,
      "Kanton": "BE",
      "Gemeinden": "R�dtligen-Alchenfl�h, Kirchberg (BE)"
    },
    {
      "PLZ": 3423,
      "Kanton": "BE",
      "Gemeinden": "Ersigen"
    },
    {
      "PLZ": 3424,
      "Kanton": "BE",
      "Gemeinden": "Ersigen"
    },
    {
      "PLZ": 3425,
      "Kanton": "BE",
      "Gemeinden": "Koppigen, Willadingen"
    },
    {
      "PLZ": 3426,
      "Kanton": "BE",
      "Gemeinden": "Aefligen"
    },
    {
      "PLZ": 3427,
      "Kanton": "BE",
      "Gemeinden": "Utzenstorf"
    },
    {
      "PLZ": 3428,
      "Kanton": "BE",
      "Gemeinden": "Wiler bei Utzenstorf"
    },
    {
      "PLZ": 3429,
      "Kanton": "BE",
      "Gemeinden": "Hellsau, H�chstetten"
    },
    {
      "PLZ": 3432,
      "Kanton": "BE",
      "Gemeinden": "L�tzelfl�h"
    },
    {
      "PLZ": 3433,
      "Kanton": "BE",
      "Gemeinden": "R�derswil"
    },
    {
      "PLZ": 3434,
      "Kanton": "BE",
      "Gemeinden": "Landiswil"
    },
    {
      "PLZ": 3435,
      "Kanton": "BE",
      "Gemeinden": "L�tzelfl�h"
    },
    {
      "PLZ": 3436,
      "Kanton": "BE",
      "Gemeinden": "R�derswil"
    },
    {
      "PLZ": 3437,
      "Kanton": "BE",
      "Gemeinden": "R�derswil"
    },
    {
      "PLZ": 3438,
      "Kanton": "BE",
      "Gemeinden": "Lauperswil"
    },
    {
      "PLZ": 3439,
      "Kanton": "BE",
      "Gemeinden": "L�tzelfl�h"
    },
    {
      "PLZ": 3452,
      "Kanton": "BE",
      "Gemeinden": "L�tzelfl�h"
    },
    {
      "PLZ": 3453,
      "Kanton": "BE",
      "Gemeinden": "Trachselwald"
    },
    {
      "PLZ": 3454,
      "Kanton": "BE",
      "Gemeinden": "Sumiswald"
    },
    {
      "PLZ": 3455,
      "Kanton": "BE",
      "Gemeinden": "Sumiswald"
    },
    {
      "PLZ": 3456,
      "Kanton": "BE",
      "Gemeinden": "Trachselwald"
    },
    {
      "PLZ": 3457,
      "Kanton": "BE",
      "Gemeinden": "Sumiswald"
    },
    {
      "PLZ": 3462,
      "Kanton": "BE",
      "Gemeinden": "Affoltern im Emmental"
    },
    {
      "PLZ": 3463,
      "Kanton": "BE",
      "Gemeinden": "Affoltern im Emmental"
    },
    {
      "PLZ": 3464,
      "Kanton": "BE",
      "Gemeinden": "Walterswil (BE)"
    },
    {
      "PLZ": 3465,
      "Kanton": "BE",
      "Gemeinden": "D�rrenroth"
    },
    {
      "PLZ": 3472,
      "Kanton": "BE",
      "Gemeinden": "Rumendingen, Wynigen"
    },
    {
      "PLZ": 3473,
      "Kanton": "BE",
      "Gemeinden": "Alchenstorf"
    },
    {
      "PLZ": 3474,
      "Kanton": "BE",
      "Gemeinden": "Wynigen"
    },
    {
      "PLZ": 3475,
      "Kanton": "BE",
      "Gemeinden": "Seeberg"
    },
    {
      "PLZ": 3476,
      "Kanton": "BE",
      "Gemeinden": "Ochlenberg"
    },
    {
      "PLZ": 3503,
      "Kanton": "BE",
      "Gemeinden": "Konolfingen"
    },
    {
      "PLZ": 3504,
      "Kanton": "BE",
      "Gemeinden": "Niederh�nigen, Oberh�nigen"
    },
    {
      "PLZ": 3506,
      "Kanton": "BE",
      "Gemeinden": "Grossh�chstetten"
    },
    {
      "PLZ": 3507,
      "Kanton": "BE",
      "Gemeinden": "Biglen"
    },
    {
      "PLZ": 3508,
      "Kanton": "BE",
      "Gemeinden": "Arni (BE)"
    },
    {
      "PLZ": 3510,
      "Kanton": "BE",
      "Gemeinden": "Freimettigen, H�utligen, Konolfingen"
    },
    {
      "PLZ": 3512,
      "Kanton": "BE",
      "Gemeinden": "Walkringen"
    },
    {
      "PLZ": 3513,
      "Kanton": "BE",
      "Gemeinden": "Walkringen"
    },
    {
      "PLZ": 3531,
      "Kanton": "BE",
      "Gemeinden": "Oberthal"
    },
    {
      "PLZ": 3532,
      "Kanton": "BE",
      "Gemeinden": "Mirchel, Z�ziwil"
    },
    {
      "PLZ": 3533,
      "Kanton": "BE",
      "Gemeinden": "Bowil"
    },
    {
      "PLZ": 3534,
      "Kanton": "BE",
      "Gemeinden": "Signau"
    },
    {
      "PLZ": 3535,
      "Kanton": "BE",
      "Gemeinden": "Signau"
    },
    {
      "PLZ": 3536,
      "Kanton": "BE",
      "Gemeinden": "Eggiwil"
    },
    {
      "PLZ": 3537,
      "Kanton": "BE",
      "Gemeinden": "Eggiwil"
    },
    {
      "PLZ": 3538,
      "Kanton": "BE",
      "Gemeinden": "R�thenbach im Emmental"
    },
    {
      "PLZ": 3543,
      "Kanton": "BE",
      "Gemeinden": "Lauperswil"
    },
    {
      "PLZ": 3550,
      "Kanton": "BE",
      "Gemeinden": "Langnau im Emmental"
    },
    {
      "PLZ": 3551,
      "Kanton": "BE",
      "Gemeinden": "Langnau im Emmental"
    },
    {
      "PLZ": 3552,
      "Kanton": "BE",
      "Gemeinden": "Langnau im Emmental"
    },
    {
      "PLZ": 3553,
      "Kanton": "BE",
      "Gemeinden": "Langnau im Emmental"
    },
    {
      "PLZ": 3555,
      "Kanton": "BE",
      "Gemeinden": "Trubschachen"
    },
    {
      "PLZ": 3556,
      "Kanton": "BE",
      "Gemeinden": "Trub"
    },
    {
      "PLZ": 3557,
      "Kanton": "BE",
      "Gemeinden": "Trub"
    },
    {
      "PLZ": 3600,
      "Kanton": "BE",
      "Gemeinden": "Thun"
    },
    {
      "PLZ": 3603,
      "Kanton": "BE",
      "Gemeinden": "Thun"
    },
    {
      "PLZ": 3604,
      "Kanton": "BE",
      "Gemeinden": "Thun"
    },
    {
      "PLZ": 3608,
      "Kanton": "BE",
      "Gemeinden": "Thun"
    },
    {
      "PLZ": 3612,
      "Kanton": "BE",
      "Gemeinden": "Steffisburg"
    },
    {
      "PLZ": 3613,
      "Kanton": "BE",
      "Gemeinden": "Steffisburg"
    },
    {
      "PLZ": 3614,
      "Kanton": "BE",
      "Gemeinden": "Unterlangenegg"
    },
    {
      "PLZ": 3615,
      "Kanton": "BE",
      "Gemeinden": "Buchholterberg"
    },
    {
      "PLZ": 3616,
      "Kanton": "BE",
      "Gemeinden": "Unterlangenegg"
    },
    {
      "PLZ": 3617,
      "Kanton": "BE",
      "Gemeinden": "Fahrni"
    },
    {
      "PLZ": 3618,
      "Kanton": "BE",
      "Gemeinden": "R�thenbach im Emmental"
    },
    {
      "PLZ": 3619,
      "Kanton": "BE",
      "Gemeinden": "Eriz"
    },
    {
      "PLZ": 3622,
      "Kanton": "BE",
      "Gemeinden": "Homberg"
    },
    {
      "PLZ": 3623,
      "Kanton": "BE",
      "Gemeinden": "Horrenbach-Buchen, Teuffenthal (BE)"
    },
    {
      "PLZ": 3624,
      "Kanton": "BE",
      "Gemeinden": "Thun, Schwendibach"
    },
    {
      "PLZ": 3625,
      "Kanton": "BE",
      "Gemeinden": "Heiligenschwendi"
    },
    {
      "PLZ": 3626,
      "Kanton": "BE",
      "Gemeinden": "Hilterfingen"
    },
    {
      "PLZ": 3627,
      "Kanton": "BE",
      "Gemeinden": "Heimberg"
    },
    {
      "PLZ": 3628,
      "Kanton": "BE",
      "Gemeinden": "Uttigen"
    },
    {
      "PLZ": 3629,
      "Kanton": "BE",
      "Gemeinden": "Jaberg, Kiesen, Oppligen"
    },
    {
      "PLZ": 3631,
      "Kanton": "BE",
      "Gemeinden": "Stocken-H�fen"
    },
    {
      "PLZ": 3632,
      "Kanton": "BE",
      "Gemeinden": "Stocken-H�fen"
    },
    {
      "PLZ": 3633,
      "Kanton": "BE",
      "Gemeinden": "Amsoldingen"
    },
    {
      "PLZ": 3634,
      "Kanton": "BE",
      "Gemeinden": "Thierachern"
    },
    {
      "PLZ": 3635,
      "Kanton": "BE",
      "Gemeinden": "Uebeschi"
    },
    {
      "PLZ": 3636,
      "Kanton": "BE",
      "Gemeinden": "Forst-L�ngenb�hl"
    },
    {
      "PLZ": 3638,
      "Kanton": "BE",
      "Gemeinden": "Blumenstein, Pohlern"
    },
    {
      "PLZ": 3645,
      "Kanton": "BE",
      "Gemeinden": "Spiez, Zwieselberg"
    },
    {
      "PLZ": 3646,
      "Kanton": "BE",
      "Gemeinden": "Spiez"
    },
    {
      "PLZ": 3647,
      "Kanton": "BE",
      "Gemeinden": "Reutigen"
    },
    {
      "PLZ": 3652,
      "Kanton": "BE",
      "Gemeinden": "Hilterfingen"
    },
    {
      "PLZ": 3653,
      "Kanton": "BE",
      "Gemeinden": "Oberhofen am Thunersee"
    },
    {
      "PLZ": 3654,
      "Kanton": "BE",
      "Gemeinden": "Sigriswil"
    },
    {
      "PLZ": 3655,
      "Kanton": "BE",
      "Gemeinden": "Sigriswil"
    },
    {
      "PLZ": 3656,
      "Kanton": "BE",
      "Gemeinden": "Sigriswil"
    },
    {
      "PLZ": 3657,
      "Kanton": "BE",
      "Gemeinden": "Sigriswil"
    },
    {
      "PLZ": 3658,
      "Kanton": "BE",
      "Gemeinden": "Sigriswil"
    },
    {
      "PLZ": 3661,
      "Kanton": "BE",
      "Gemeinden": "Uetendorf"
    },
    {
      "PLZ": 3662,
      "Kanton": "BE",
      "Gemeinden": "Seftigen"
    },
    {
      "PLZ": 3663,
      "Kanton": "BE",
      "Gemeinden": "Gurzelen"
    },
    {
      "PLZ": 3664,
      "Kanton": "BE",
      "Gemeinden": "Burgistein"
    },
    {
      "PLZ": 3665,
      "Kanton": "BE",
      "Gemeinden": "Wattenwil"
    },
    {
      "PLZ": 3671,
      "Kanton": "BE",
      "Gemeinden": "Brenzikofen, Herbligen"
    },
    {
      "PLZ": 3672,
      "Kanton": "BE",
      "Gemeinden": "Oberdiessbach"
    },
    {
      "PLZ": 3673,
      "Kanton": "BE",
      "Gemeinden": "Linden"
    },
    {
      "PLZ": 3674,
      "Kanton": "BE",
      "Gemeinden": "Oberdiessbach"
    },
    {
      "PLZ": 3700,
      "Kanton": "BE",
      "Gemeinden": "Spiez"
    },
    {
      "PLZ": 3702,
      "Kanton": "BE",
      "Gemeinden": "Spiez"
    },
    {
      "PLZ": 3703,
      "Kanton": "BE",
      "Gemeinden": "Aeschi bei Spiez"
    },
    {
      "PLZ": 3704,
      "Kanton": "BE",
      "Gemeinden": "Krattigen"
    },
    {
      "PLZ": 3705,
      "Kanton": "BE",
      "Gemeinden": "Spiez"
    },
    {
      "PLZ": 3706,
      "Kanton": "BE",
      "Gemeinden": "Leissigen"
    },
    {
      "PLZ": 3707,
      "Kanton": "BE",
      "Gemeinden": "D�rligen"
    },
    {
      "PLZ": 3711,
      "Kanton": "BE",
      "Gemeinden": "Aeschi bei Spiez, Reichenbach im Kandertal"
    },
    {
      "PLZ": 3713,
      "Kanton": "BE",
      "Gemeinden": "Reichenbach im Kandertal"
    },
    {
      "PLZ": 3714,
      "Kanton": "BE",
      "Gemeinden": "Frutigen, Reichenbach im Kandertal"
    },
    {
      "PLZ": 3715,
      "Kanton": "BE",
      "Gemeinden": "Adelboden"
    },
    {
      "PLZ": 3716,
      "Kanton": "BE",
      "Gemeinden": "Kandergrund"
    },
    {
      "PLZ": 3717,
      "Kanton": "BE",
      "Gemeinden": "Kandergrund"
    },
    {
      "PLZ": 3718,
      "Kanton": "BE",
      "Gemeinden": "Kandersteg"
    },
    {
      "PLZ": 3722,
      "Kanton": "BE",
      "Gemeinden": "Reichenbach im Kandertal"
    },
    {
      "PLZ": 3723,
      "Kanton": "BE",
      "Gemeinden": "Reichenbach im Kandertal"
    },
    {
      "PLZ": 3724,
      "Kanton": "BE",
      "Gemeinden": "Frutigen"
    },
    {
      "PLZ": 3725,
      "Kanton": "BE",
      "Gemeinden": "Frutigen"
    },
    {
      "PLZ": 3752,
      "Kanton": "BE",
      "Gemeinden": "Wimmis"
    },
    {
      "PLZ": 3753,
      "Kanton": "BE",
      "Gemeinden": "Diemtigen"
    },
    {
      "PLZ": 3754,
      "Kanton": "BE",
      "Gemeinden": "Diemtigen"
    },
    {
      "PLZ": 3755,
      "Kanton": "BE",
      "Gemeinden": "Diemtigen"
    },
    {
      "PLZ": 3756,
      "Kanton": "BE",
      "Gemeinden": "Diemtigen"
    },
    {
      "PLZ": 3757,
      "Kanton": "BE",
      "Gemeinden": "Diemtigen"
    },
    {
      "PLZ": 3758,
      "Kanton": "BE",
      "Gemeinden": "Erlenbach im Simmental"
    },
    {
      "PLZ": 3762,
      "Kanton": "BE",
      "Gemeinden": "Erlenbach im Simmental"
    },
    {
      "PLZ": 3763,
      "Kanton": "BE",
      "Gemeinden": "D�rstetten"
    },
    {
      "PLZ": 3764,
      "Kanton": "BE",
      "Gemeinden": "D�rstetten"
    },
    {
      "PLZ": 3765,
      "Kanton": "BE",
      "Gemeinden": "Oberwil im Simmental"
    },
    {
      "PLZ": 3766,
      "Kanton": "BE",
      "Gemeinden": "Boltigen"
    },
    {
      "PLZ": 3770,
      "Kanton": "BE",
      "Gemeinden": "Zweisimmen"
    },
    {
      "PLZ": 3771,
      "Kanton": "BE",
      "Gemeinden": "Zweisimmen"
    },
    {
      "PLZ": 3772,
      "Kanton": "BE",
      "Gemeinden": "St. Stephan"
    },
    {
      "PLZ": 3773,
      "Kanton": "BE",
      "Gemeinden": "St. Stephan"
    },
    {
      "PLZ": 3775,
      "Kanton": "BE",
      "Gemeinden": "Lenk"
    },
    {
      "PLZ": 3776,
      "Kanton": "BE",
      "Gemeinden": "Zweisimmen"
    },
    {
      "PLZ": 3777,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3778,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3780,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3781,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3782,
      "Kanton": "BE",
      "Gemeinden": "Lauenen"
    },
    {
      "PLZ": 3783,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3784,
      "Kanton": "BE",
      "Gemeinden": "Gsteig"
    },
    {
      "PLZ": 3785,
      "Kanton": "BE",
      "Gemeinden": "Gsteig"
    },
    {
      "PLZ": 3792,
      "Kanton": "BE",
      "Gemeinden": "Saanen"
    },
    {
      "PLZ": 3800,
      "Kanton": "BE",
      "Gemeinden": "G�ndlischwand, Interlaken, Matten bei Interlaken, Beatenberg, Unterseen"
    },
    {
      "PLZ": 3801,
      "Kanton": "VS",
      "Gemeinden": "Fieschertal"
    },
    {
      "PLZ": 3803,
      "Kanton": "BE",
      "Gemeinden": "Beatenberg"
    },
    {
      "PLZ": 3804,
      "Kanton": "BE",
      "Gemeinden": "Habkern"
    },
    {
      "PLZ": 3805,
      "Kanton": "BE",
      "Gemeinden": "Ringgenberg (BE)"
    },
    {
      "PLZ": 3806,
      "Kanton": "BE",
      "Gemeinden": "B�nigen"
    },
    {
      "PLZ": 3807,
      "Kanton": "BE",
      "Gemeinden": "Iseltwald"
    },
    {
      "PLZ": 3812,
      "Kanton": "BE",
      "Gemeinden": "Wilderswil"
    },
    {
      "PLZ": 3813,
      "Kanton": "BE",
      "Gemeinden": "Saxeten"
    },
    {
      "PLZ": 3814,
      "Kanton": "BE",
      "Gemeinden": "Gsteigwiler"
    },
    {
      "PLZ": 3815,
      "Kanton": "BE",
      "Gemeinden": "G�ndlischwand"
    },
    {
      "PLZ": 3816,
      "Kanton": "BE",
      "Gemeinden": "Grindelwald, L�tschental"
    },
    {
      "PLZ": 3818,
      "Kanton": "BE",
      "Gemeinden": "Grindelwald"
    },
    {
      "PLZ": 3822,
      "Kanton": "BE",
      "Gemeinden": "Lauterbrunnen"
    },
    {
      "PLZ": 3823,
      "Kanton": "BE",
      "Gemeinden": "Lauterbrunnen"
    },
    {
      "PLZ": 3824,
      "Kanton": "BE",
      "Gemeinden": "Lauterbrunnen"
    },
    {
      "PLZ": 3825,
      "Kanton": "BE",
      "Gemeinden": "Lauterbrunnen"
    },
    {
      "PLZ": 3826,
      "Kanton": "BE",
      "Gemeinden": "Lauterbrunnen"
    },
    {
      "PLZ": 3852,
      "Kanton": "BE",
      "Gemeinden": "Ringgenberg (BE)"
    },
    {
      "PLZ": 3853,
      "Kanton": "BE",
      "Gemeinden": "Niederried bei Interlaken"
    },
    {
      "PLZ": 3854,
      "Kanton": "BE",
      "Gemeinden": "Oberried am Brienzersee"
    },
    {
      "PLZ": 3855,
      "Kanton": "BE",
      "Gemeinden": "Brienz (BE), Schwanden bei Brienz"
    },
    {
      "PLZ": 3856,
      "Kanton": "BE",
      "Gemeinden": "Brienzwiler"
    },
    {
      "PLZ": 3857,
      "Kanton": "BE",
      "Gemeinden": "Meiringen"
    },
    {
      "PLZ": 3858,
      "Kanton": "BE",
      "Gemeinden": "Hofstetten bei Brienz"
    },
    {
      "PLZ": 3860,
      "Kanton": "BE",
      "Gemeinden": "Meiringen, Schattenhalb"
    },
    {
      "PLZ": 3862,
      "Kanton": "BE",
      "Gemeinden": "Innertkirchen"
    },
    {
      "PLZ": 3863,
      "Kanton": "BE",
      "Gemeinden": "Innertkirchen"
    },
    {
      "PLZ": 3864,
      "Kanton": "BE",
      "Gemeinden": "Guttannen"
    },
    {
      "PLZ": 3900,
      "Kanton": "VS",
      "Gemeinden": "Brig-Glis"
    },
    {
      "PLZ": 3901,
      "Kanton": "VS",
      "Gemeinden": "Ried-Brig"
    },
    {
      "PLZ": 3902,
      "Kanton": "VS",
      "Gemeinden": "Brig-Glis"
    },
    {
      "PLZ": 3903,
      "Kanton": "VS",
      "Gemeinden": "Naters"
    },
    {
      "PLZ": 3904,
      "Kanton": "VS",
      "Gemeinden": "Naters"
    },
    {
      "PLZ": 3905,
      "Kanton": "VS",
      "Gemeinden": "Saas-Almagell"
    },
    {
      "PLZ": 3906,
      "Kanton": "VS",
      "Gemeinden": "Saas-Fee"
    },
    {
      "PLZ": 3907,
      "Kanton": "VS",
      "Gemeinden": "Simplon, Zwischbergen"
    },
    {
      "PLZ": 3908,
      "Kanton": "VS",
      "Gemeinden": "Saas-Balen"
    },
    {
      "PLZ": 3910,
      "Kanton": "VS",
      "Gemeinden": "Saas-Grund"
    },
    {
      "PLZ": 3911,
      "Kanton": "VS",
      "Gemeinden": "Ried-Brig"
    },
    {
      "PLZ": 3912,
      "Kanton": "VS",
      "Gemeinden": "Termen"
    },
    {
      "PLZ": 3913,
      "Kanton": "VS",
      "Gemeinden": "Termen"
    },
    {
      "PLZ": 3914,
      "Kanton": "VS",
      "Gemeinden": "Naters"
    },
    {
      "PLZ": 3916,
      "Kanton": "VS",
      "Gemeinden": "Ferden"
    },
    {
      "PLZ": 3917,
      "Kanton": "VS",
      "Gemeinden": "Ferden, Kippel"
    },
    {
      "PLZ": 3918,
      "Kanton": "VS",
      "Gemeinden": "Wiler (L�tschen)"
    },
    {
      "PLZ": 3919,
      "Kanton": "VS",
      "Gemeinden": "Blatten"
    },
    {
      "PLZ": 3920,
      "Kanton": "VS",
      "Gemeinden": "Zermatt"
    },
    {
      "PLZ": 3922,
      "Kanton": "VS",
      "Gemeinden": "Eisten, Embd, Stalden (VS)"
    },
    {
      "PLZ": 3923,
      "Kanton": "VS",
      "Gemeinden": "T�rbel"
    },
    {
      "PLZ": 3924,
      "Kanton": "VS",
      "Gemeinden": "St. Niklaus"
    },
    {
      "PLZ": 3925,
      "Kanton": "VS",
      "Gemeinden": "Gr�chen"
    },
    {
      "PLZ": 3926,
      "Kanton": "VS",
      "Gemeinden": "Embd"
    },
    {
      "PLZ": 3927,
      "Kanton": "VS",
      "Gemeinden": "St. Niklaus"
    },
    {
      "PLZ": 3928,
      "Kanton": "VS",
      "Gemeinden": "Randa"
    },
    {
      "PLZ": 3929,
      "Kanton": "VS",
      "Gemeinden": "T�sch"
    },
    {
      "PLZ": 3930,
      "Kanton": "VS",
      "Gemeinden": "Visp"
    },
    {
      "PLZ": 3931,
      "Kanton": "VS",
      "Gemeinden": "Lalden"
    },
    {
      "PLZ": 3932,
      "Kanton": "VS",
      "Gemeinden": "Visperterminen"
    },
    {
      "PLZ": 3933,
      "Kanton": "VS",
      "Gemeinden": "Staldenried"
    },
    {
      "PLZ": 3934,
      "Kanton": "VS",
      "Gemeinden": "Zeneggen"
    },
    {
      "PLZ": 3935,
      "Kanton": "VS",
      "Gemeinden": "B�rchen"
    },
    {
      "PLZ": 3937,
      "Kanton": "VS",
      "Gemeinden": "Baltschieder"
    },
    {
      "PLZ": 3938,
      "Kanton": "VS",
      "Gemeinden": "Ausserberg"
    },
    {
      "PLZ": 3939,
      "Kanton": "VS",
      "Gemeinden": "Eggerberg"
    },
    {
      "PLZ": 3940,
      "Kanton": "VS",
      "Gemeinden": "Steg-Hohtenn"
    },
    {
      "PLZ": 3942,
      "Kanton": "VS",
      "Gemeinden": "Niedergesteln, Raron"
    },
    {
      "PLZ": 3943,
      "Kanton": "VS",
      "Gemeinden": "Eischoll"
    },
    {
      "PLZ": 3944,
      "Kanton": "VS",
      "Gemeinden": "Unterb�ch"
    },
    {
      "PLZ": 3945,
      "Kanton": "VS",
      "Gemeinden": "Gampel-Bratsch"
    },
    {
      "PLZ": 3946,
      "Kanton": "VS",
      "Gemeinden": "Turtmann-Unterems"
    },
    {
      "PLZ": 3947,
      "Kanton": "VS",
      "Gemeinden": "Ergisch"
    },
    {
      "PLZ": 3948,
      "Kanton": "VS",
      "Gemeinden": "Oberems, Turtmann-Unterems"
    },
    {
      "PLZ": 3949,
      "Kanton": "VS",
      "Gemeinden": "Steg-Hohtenn"
    },
    {
      "PLZ": 3951,
      "Kanton": "VS",
      "Gemeinden": "Agarn"
    },
    {
      "PLZ": 3952,
      "Kanton": "VS",
      "Gemeinden": "Leuk"
    },
    {
      "PLZ": 3953,
      "Kanton": "VS",
      "Gemeinden": "Inden, Leuk, Varen"
    },
    {
      "PLZ": 3954,
      "Kanton": "VS",
      "Gemeinden": "Leukerbad"
    },
    {
      "PLZ": 3955,
      "Kanton": "VS",
      "Gemeinden": "Albinen"
    },
    {
      "PLZ": 3956,
      "Kanton": "VS",
      "Gemeinden": "Guttet-Feschel"
    },
    {
      "PLZ": 3957,
      "Kanton": "VS",
      "Gemeinden": "Gampel-Bratsch, Leuk"
    },
    {
      "PLZ": 3960,
      "Kanton": "VS",
      "Gemeinden": "Montana, Randogne, Sierre, Anniviers"
    },
    {
      "PLZ": 3961,
      "Kanton": "VS",
      "Gemeinden": "Anniviers"
    },
    {
      "PLZ": 3963,
      "Kanton": "VS",
      "Gemeinden": "Mollens (VS), Montana"
    },
    {
      "PLZ": 3965,
      "Kanton": "VS",
      "Gemeinden": "Chippis"
    },
    {
      "PLZ": 3966,
      "Kanton": "VS",
      "Gemeinden": "Chalais"
    },
    {
      "PLZ": 3967,
      "Kanton": "VS",
      "Gemeinden": "Chalais"
    },
    {
      "PLZ": 3968,
      "Kanton": "VS",
      "Gemeinden": "Veyras"
    },
    {
      "PLZ": 3970,
      "Kanton": "VS",
      "Gemeinden": "Salgesch"
    },
    {
      "PLZ": 3971,
      "Kanton": "VS",
      "Gemeinden": "Chermignon"
    },
    {
      "PLZ": 3972,
      "Kanton": "VS",
      "Gemeinden": "Mi_ge"
    },
    {
      "PLZ": 3973,
      "Kanton": "VS",
      "Gemeinden": "Venth�ne"
    },
    {
      "PLZ": 3974,
      "Kanton": "VS",
      "Gemeinden": "Mollens (VS)"
    },
    {
      "PLZ": 3975,
      "Kanton": "VS",
      "Gemeinden": "Randogne"
    },
    {
      "PLZ": 3976,
      "Kanton": "VS",
      "Gemeinden": "Chermignon, Sierre"
    },
    {
      "PLZ": 3977,
      "Kanton": "VS",
      "Gemeinden": "Sierre"
    },
    {
      "PLZ": 3978,
      "Kanton": "VS",
      "Gemeinden": "Lens"
    },
    {
      "PLZ": 3979,
      "Kanton": "VS",
      "Gemeinden": "Gr�ne"
    },
    {
      "PLZ": 3982,
      "Kanton": "VS",
      "Gemeinden": "Bitsch"
    },
    {
      "PLZ": 3983,
      "Kanton": "VS",
      "Gemeinden": "Bister, M�rel-Filet, Riederalp"
    },
    {
      "PLZ": 3984,
      "Kanton": "VS",
      "Gemeinden": "Bellwald, Fiesch, Fieschertal"
    },
    {
      "PLZ": 3985,
      "Kanton": "VS",
      "Gemeinden": "M�nster-Geschinen"
    },
    {
      "PLZ": 3986,
      "Kanton": "VS",
      "Gemeinden": "Riederalp"
    },
    {
      "PLZ": 3987,
      "Kanton": "VS",
      "Gemeinden": "Riederalp"
    },
    {
      "PLZ": 3988,
      "Kanton": "VS",
      "Gemeinden": "Obergoms"
    },
    {
      "PLZ": 3989,
      "Kanton": "VS",
      "Gemeinden": "Grafschaft, Blitzingen, Niederwald"
    },
    {
      "PLZ": 3991,
      "Kanton": "VS",
      "Gemeinden": "Bettmeralp"
    },
    {
      "PLZ": 3992,
      "Kanton": "VS",
      "Gemeinden": "Bettmeralp"
    },
    {
      "PLZ": 3993,
      "Kanton": "VS",
      "Gemeinden": "Grengiols"
    },
    {
      "PLZ": 3994,
      "Kanton": "VS",
      "Gemeinden": "Lax, Bettmeralp"
    },
    {
      "PLZ": 3995,
      "Kanton": "VS",
      "Gemeinden": "Ernen"
    },
    {
      "PLZ": 3996,
      "Kanton": "VS",
      "Gemeinden": "Binn"
    },
    {
      "PLZ": 3997,
      "Kanton": "VS",
      "Gemeinden": "Bellwald"
    },
    {
      "PLZ": 3998,
      "Kanton": "VS",
      "Gemeinden": "Reckingen-GlURngen"
    },
    {
      "PLZ": 3999,
      "Kanton": "VS",
      "Gemeinden": "Obergoms"
    },
    {
      "PLZ": 4001,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4051,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4052,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4053,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4054,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4055,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4056,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4057,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4058,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4059,
      "Kanton": "BS",
      "Gemeinden": "Basel"
    },
    {
      "PLZ": 4101,
      "Kanton": "BL",
      "Gemeinden": "Binningen"
    },
    {
      "PLZ": 4102,
      "Kanton": "BL",
      "Gemeinden": "Binningen"
    },
    {
      "PLZ": 4103,
      "Kanton": "BL",
      "Gemeinden": "Bottmingen"
    },
    {
      "PLZ": 4104,
      "Kanton": "BL",
      "Gemeinden": "Oberwil (BL)"
    },
    {
      "PLZ": 4105,
      "Kanton": "BL",
      "Gemeinden": "Biel-Benken"
    },
    {
      "PLZ": 4106,
      "Kanton": "BL",
      "Gemeinden": "Therwil"
    },
    {
      "PLZ": 4107,
      "Kanton": "BL",
      "Gemeinden": "Ettingen"
    },
    {
      "PLZ": 4108,
      "Kanton": "SO",
      "Gemeinden": "Witterswil"
    },
    {
      "PLZ": 4112,
      "Kanton": "SO",
      "Gemeinden": "B�ttwil, Hofstetten-Fl�h"
    },
    {
      "PLZ": 4114,
      "Kanton": "SO",
      "Gemeinden": "Hofstetten-Fl�h"
    },
    {
      "PLZ": 4115,
      "Kanton": "SO",
      "Gemeinden": "Metzerlen-Mariastein"
    },
    {
      "PLZ": 4116,
      "Kanton": "SO",
      "Gemeinden": "Metzerlen-Mariastein"
    },
    {
      "PLZ": 4117,
      "Kanton": "BL",
      "Gemeinden": "Burg im Leimental"
    },
    {
      "PLZ": 4118,
      "Kanton": "SO",
      "Gemeinden": "Rodersdorf"
    },
    {
      "PLZ": 4123,
      "Kanton": "BL",
      "Gemeinden": "Allschwil"
    },
    {
      "PLZ": 4124,
      "Kanton": "BL",
      "Gemeinden": "Sch�nenbuch"
    },
    {
      "PLZ": 4125,
      "Kanton": "BS",
      "Gemeinden": "Riehen"
    },
    {
      "PLZ": 4126,
      "Kanton": "BS",
      "Gemeinden": "Bettingen"
    },
    {
      "PLZ": 4127,
      "Kanton": "BL",
      "Gemeinden": "Birsfelden"
    },
    {
      "PLZ": 4132,
      "Kanton": "BL",
      "Gemeinden": "Muttenz"
    },
    {
      "PLZ": 4133,
      "Kanton": "BL",
      "Gemeinden": "Pratteln"
    },
    {
      "PLZ": 4142,
      "Kanton": "BL",
      "Gemeinden": "M�nchenstein"
    },
    {
      "PLZ": 4143,
      "Kanton": "SO",
      "Gemeinden": "Dornach"
    },
    {
      "PLZ": 4144,
      "Kanton": "BL",
      "Gemeinden": "Arlesheim"
    },
    {
      "PLZ": 4145,
      "Kanton": "SO",
      "Gemeinden": "Gempen"
    },
    {
      "PLZ": 4146,
      "Kanton": "SO",
      "Gemeinden": "Hochwald"
    },
    {
      "PLZ": 4147,
      "Kanton": "BL",
      "Gemeinden": "Aesch (BL)"
    },
    {
      "PLZ": 4148,
      "Kanton": "BL",
      "Gemeinden": "Pfeffingen"
    },
    {
      "PLZ": 4153,
      "Kanton": "BL",
      "Gemeinden": "Reinach (BL)"
    },
    {
      "PLZ": 4202,
      "Kanton": "BL",
      "Gemeinden": "Duggingen"
    },
    {
      "PLZ": 4203,
      "Kanton": "BL",
      "Gemeinden": "Grellingen"
    },
    {
      "PLZ": 4204,
      "Kanton": "SO",
      "Gemeinden": "Himmelried"
    },
    {
      "PLZ": 4206,
      "Kanton": "SO",
      "Gemeinden": "Seewen"
    },
    {
      "PLZ": 4207,
      "Kanton": "BL",
      "Gemeinden": "Bretzwil"
    },
    {
      "PLZ": 4208,
      "Kanton": "SO",
      "Gemeinden": "Nunningen"
    },
    {
      "PLZ": 4222,
      "Kanton": "BL",
      "Gemeinden": "Zwingen"
    },
    {
      "PLZ": 4223,
      "Kanton": "BL",
      "Gemeinden": "Blauen"
    },
    {
      "PLZ": 4224,
      "Kanton": "BL",
      "Gemeinden": "Nenzlingen"
    },
    {
      "PLZ": 4225,
      "Kanton": "BL",
      "Gemeinden": "Brislach"
    },
    {
      "PLZ": 4226,
      "Kanton": "SO",
      "Gemeinden": "Breitenbach"
    },
    {
      "PLZ": 4227,
      "Kanton": "SO",
      "Gemeinden": "B�sserach"
    },
    {
      "PLZ": 4228,
      "Kanton": "SO",
      "Gemeinden": "Erschwil"
    },
    {
      "PLZ": 4229,
      "Kanton": "SO",
      "Gemeinden": "Beinwil (SO)"
    },
    {
      "PLZ": 4232,
      "Kanton": "SO",
      "Gemeinden": "Fehren"
    },
    {
      "PLZ": 4233,
      "Kanton": "SO",
      "Gemeinden": "Meltingen"
    },
    {
      "PLZ": 4234,
      "Kanton": "SO",
      "Gemeinden": "Zullwil"
    },
    {
      "PLZ": 4242,
      "Kanton": "BL",
      "Gemeinden": "Laufen"
    },
    {
      "PLZ": 4243,
      "Kanton": "BL",
      "Gemeinden": "Dittingen"
    },
    {
      "PLZ": 4244,
      "Kanton": "BL",
      "Gemeinden": "R�schenz"
    },
    {
      "PLZ": 4245,
      "Kanton": "SO",
      "Gemeinden": "Kleinl�tzel"
    },
    {
      "PLZ": 4246,
      "Kanton": "BL",
      "Gemeinden": "Wahlen"
    },
    {
      "PLZ": 4247,
      "Kanton": "SO",
      "Gemeinden": "Grindel"
    },
    {
      "PLZ": 4252,
      "Kanton": "SO",
      "Gemeinden": "B�rschwil"
    },
    {
      "PLZ": 4253,
      "Kanton": "BL",
      "Gemeinden": "Liesberg"
    },
    {
      "PLZ": 4254,
      "Kanton": "BL",
      "Gemeinden": "Liesberg"
    },
    {
      "PLZ": 4302,
      "Kanton": "BL",
      "Gemeinden": "Augst"
    },
    {
      "PLZ": 4303,
      "Kanton": "AG",
      "Gemeinden": "Kaiseraugst"
    },
    {
      "PLZ": 4304,
      "Kanton": "BL",
      "Gemeinden": "Giebenach"
    },
    {
      "PLZ": 4305,
      "Kanton": "AG",
      "Gemeinden": "Olsberg"
    },
    {
      "PLZ": 4310,
      "Kanton": "AG",
      "Gemeinden": "Rheinfelden"
    },
    {
      "PLZ": 4312,
      "Kanton": "AG",
      "Gemeinden": "Magden"
    },
    {
      "PLZ": 4313,
      "Kanton": "AG",
      "Gemeinden": "M�hlin"
    },
    {
      "PLZ": 4314,
      "Kanton": "AG",
      "Gemeinden": "Zeiningen"
    },
    {
      "PLZ": 4315,
      "Kanton": "AG",
      "Gemeinden": "Zuzgen"
    },
    {
      "PLZ": 4316,
      "Kanton": "AG",
      "Gemeinden": "Hellikon"
    },
    {
      "PLZ": 4317,
      "Kanton": "AG",
      "Gemeinden": "Wegenstetten"
    },
    {
      "PLZ": 4322,
      "Kanton": "AG",
      "Gemeinden": "Mumpf"
    },
    {
      "PLZ": 4323,
      "Kanton": "AG",
      "Gemeinden": "Wallbach"
    },
    {
      "PLZ": 4324,
      "Kanton": "AG",
      "Gemeinden": "Obermumpf"
    },
    {
      "PLZ": 4325,
      "Kanton": "AG",
      "Gemeinden": "Schupfart"
    },
    {
      "PLZ": 4332,
      "Kanton": "AG",
      "Gemeinden": "Stein (AG)"
    },
    {
      "PLZ": 4333,
      "Kanton": "AG",
      "Gemeinden": "M�nchwilen (AG)"
    },
    {
      "PLZ": 4334,
      "Kanton": "AG",
      "Gemeinden": "Sisseln"
    },
    {
      "PLZ": 4402,
      "Kanton": "BL",
      "Gemeinden": "Frenkendorf"
    },
    {
      "PLZ": 4410,
      "Kanton": "BL",
      "Gemeinden": "Liestal"
    },
    {
      "PLZ": 4411,
      "Kanton": "BL",
      "Gemeinden": "Seltisberg"
    },
    {
      "PLZ": 4412,
      "Kanton": "SO",
      "Gemeinden": "Nuglar-St. Pantaleon"
    },
    {
      "PLZ": 4413,
      "Kanton": "SO",
      "Gemeinden": "B�ren (SO)"
    },
    {
      "PLZ": 4414,
      "Kanton": "BL",
      "Gemeinden": "F�llinsdorf"
    },
    {
      "PLZ": 4415,
      "Kanton": "BL",
      "Gemeinden": "Lausen"
    },
    {
      "PLZ": 4416,
      "Kanton": "BL",
      "Gemeinden": "Bubendorf"
    },
    {
      "PLZ": 4417,
      "Kanton": "BL",
      "Gemeinden": "Ziefen"
    },
    {
      "PLZ": 4418,
      "Kanton": "BL",
      "Gemeinden": "Reigoldswil"
    },
    {
      "PLZ": 4419,
      "Kanton": "BL",
      "Gemeinden": "Lupsingen"
    },
    {
      "PLZ": 4421,
      "Kanton": "SO",
      "Gemeinden": "Nuglar-St. Pantaleon"
    },
    {
      "PLZ": 4422,
      "Kanton": "BL",
      "Gemeinden": "Arisdorf"
    },
    {
      "PLZ": 4423,
      "Kanton": "BL",
      "Gemeinden": "Hersberg"
    },
    {
      "PLZ": 4424,
      "Kanton": "BL",
      "Gemeinden": "Arboldswil"
    },
    {
      "PLZ": 4425,
      "Kanton": "BL",
      "Gemeinden": "Titterten"
    },
    {
      "PLZ": 4426,
      "Kanton": "BL",
      "Gemeinden": "Lauwil"
    },
    {
      "PLZ": 4431,
      "Kanton": "BL",
      "Gemeinden": "Bennwil"
    },
    {
      "PLZ": 4432,
      "Kanton": "BL",
      "Gemeinden": "Lampenberg"
    },
    {
      "PLZ": 4433,
      "Kanton": "BL",
      "Gemeinden": "Ramlinsburg"
    },
    {
      "PLZ": 4434,
      "Kanton": "BL",
      "Gemeinden": "H�lstein"
    },
    {
      "PLZ": 4435,
      "Kanton": "BL",
      "Gemeinden": "Niederdorf"
    },
    {
      "PLZ": 4436,
      "Kanton": "BL",
      "Gemeinden": "Liedertswil, Oberdorf (BL)"
    },
    {
      "PLZ": 4437,
      "Kanton": "BL",
      "Gemeinden": "Waldenburg"
    },
    {
      "PLZ": 4438,
      "Kanton": "BL",
      "Gemeinden": "Langenbruck"
    },
    {
      "PLZ": 4441,
      "Kanton": "BL",
      "Gemeinden": "Th�rnen"
    },
    {
      "PLZ": 4442,
      "Kanton": "BL",
      "Gemeinden": "Diepflingen"
    },
    {
      "PLZ": 4443,
      "Kanton": "BL",
      "Gemeinden": "Wittinsburg"
    },
    {
      "PLZ": 4444,
      "Kanton": "BL",
      "Gemeinden": "R�mlingen"
    },
    {
      "PLZ": 4445,
      "Kanton": "BL",
      "Gemeinden": "H�felfingen"
    },
    {
      "PLZ": 4446,
      "Kanton": "BL",
      "Gemeinden": "Buckten"
    },
    {
      "PLZ": 4447,
      "Kanton": "BL",
      "Gemeinden": "K�nerkinden"
    },
    {
      "PLZ": 4448,
      "Kanton": "BL",
      "Gemeinden": "L�ufelfingen"
    },
    {
      "PLZ": 4450,
      "Kanton": "BL",
      "Gemeinden": "Sissach"
    },
    {
      "PLZ": 4451,
      "Kanton": "BL",
      "Gemeinden": "Wintersingen"
    },
    {
      "PLZ": 4452,
      "Kanton": "BL",
      "Gemeinden": "Itingen"
    },
    {
      "PLZ": 4453,
      "Kanton": "BL",
      "Gemeinden": "Nusshof"
    },
    {
      "PLZ": 4455,
      "Kanton": "BL",
      "Gemeinden": "Zunzgen"
    },
    {
      "PLZ": 4456,
      "Kanton": "BL",
      "Gemeinden": "Tenniken"
    },
    {
      "PLZ": 4457,
      "Kanton": "BL",
      "Gemeinden": "Diegten"
    },
    {
      "PLZ": 4458,
      "Kanton": "BL",
      "Gemeinden": "Eptingen"
    },
    {
      "PLZ": 4460,
      "Kanton": "BL",
      "Gemeinden": "Gelterkinden"
    },
    {
      "PLZ": 4461,
      "Kanton": "BL",
      "Gemeinden": "B�ckten"
    },
    {
      "PLZ": 4462,
      "Kanton": "BL",
      "Gemeinden": "Rickenbach (BL)"
    },
    {
      "PLZ": 4463,
      "Kanton": "BL",
      "Gemeinden": "Buus"
    },
    {
      "PLZ": 4464,
      "Kanton": "BL",
      "Gemeinden": "Maisprach"
    },
    {
      "PLZ": 4465,
      "Kanton": "BL",
      "Gemeinden": "Hemmiken"
    },
    {
      "PLZ": 4466,
      "Kanton": "BL",
      "Gemeinden": "Ormalingen"
    },
    {
      "PLZ": 4467,
      "Kanton": "BL",
      "Gemeinden": "Rothenfluh"
    },
    {
      "PLZ": 4468,
      "Kanton": "SO",
      "Gemeinden": "Kienberg"
    },
    {
      "PLZ": 4469,
      "Kanton": "BL",
      "Gemeinden": "Anwil"
    },
    {
      "PLZ": 4492,
      "Kanton": "BL",
      "Gemeinden": "Tecknau"
    },
    {
      "PLZ": 4493,
      "Kanton": "BL",
      "Gemeinden": "Wenslingen"
    },
    {
      "PLZ": 4494,
      "Kanton": "BL",
      "Gemeinden": "Oltingen"
    },
    {
      "PLZ": 4495,
      "Kanton": "BL",
      "Gemeinden": "Zeglingen"
    },
    {
      "PLZ": 4496,
      "Kanton": "BL",
      "Gemeinden": "Kilchberg (BL)"
    },
    {
      "PLZ": 4497,
      "Kanton": "BL",
      "Gemeinden": "R�nenberg"
    },
    {
      "PLZ": 4500,
      "Kanton": "SO",
      "Gemeinden": "SO"
    },
    {
      "PLZ": 4512,
      "Kanton": "SO",
      "Gemeinden": "Bellach"
    },
    {
      "PLZ": 4513,
      "Kanton": "SO",
      "Gemeinden": "Langendorf"
    },
    {
      "PLZ": 4514,
      "Kanton": "SO",
      "Gemeinden": "Lommiswil"
    },
    {
      "PLZ": 4515,
      "Kanton": "SO",
      "Gemeinden": "Oberdorf (SO)"
    },
    {
      "PLZ": 4522,
      "Kanton": "SO",
      "Gemeinden": "R�ttenen"
    },
    {
      "PLZ": 4523,
      "Kanton": "SO",
      "Gemeinden": "Riedholz"
    },
    {
      "PLZ": 4524,
      "Kanton": "SO",
      "Gemeinden": "Balm bei G�nsberg, G�nsberg"
    },
    {
      "PLZ": 4525,
      "Kanton": "SO",
      "Gemeinden": "Balm bei G�nsberg"
    },
    {
      "PLZ": 4528,
      "Kanton": "SO",
      "Gemeinden": "Zuchwil"
    },
    {
      "PLZ": 4532,
      "Kanton": "SO",
      "Gemeinden": "Feldbrunnen-St. Niklaus"
    },
    {
      "PLZ": 4533,
      "Kanton": "SO",
      "Gemeinden": "Riedholz"
    },
    {
      "PLZ": 4534,
      "Kanton": "SO",
      "Gemeinden": "Flumenthal"
    },
    {
      "PLZ": 4535,
      "Kanton": "SO",
      "Gemeinden": "Hubersdorf, Kammersrohr"
    },
    {
      "PLZ": 4536,
      "Kanton": "BE",
      "Gemeinden": "Attiswil"
    },
    {
      "PLZ": 4537,
      "Kanton": "BE",
      "Gemeinden": "Wiedlisbach"
    },
    {
      "PLZ": 4538,
      "Kanton": "BE",
      "Gemeinden": "Oberbipp"
    },
    {
      "PLZ": 4539,
      "Kanton": "BE",
      "Gemeinden": "Farnern, Rumisberg"
    },
    {
      "PLZ": 4542,
      "Kanton": "SO",
      "Gemeinden": "Luterbach"
    },
    {
      "PLZ": 4543,
      "Kanton": "SO",
      "Gemeinden": "Deitingen"
    },
    {
      "PLZ": 4552,
      "Kanton": "SO",
      "Gemeinden": "Derendingen"
    },
    {
      "PLZ": 4553,
      "Kanton": "SO",
      "Gemeinden": "Subingen"
    },
    {
      "PLZ": 4554,
      "Kanton": "SO",
      "Gemeinden": "Etziken, H�niken"
    },
    {
      "PLZ": 4556,
      "Kanton": "SO",
      "Gemeinden": "Aeschi (SO), Bolken"
    },
    {
      "PLZ": 4557,
      "Kanton": "SO",
      "Gemeinden": "Horriwil"
    },
    {
      "PLZ": 4558,
      "Kanton": "SO",
      "Gemeinden": "Drei H�fe"
    },
    {
      "PLZ": 4562,
      "Kanton": "SO",
      "Gemeinden": "Biberist"
    },
    {
      "PLZ": 4563,
      "Kanton": "SO",
      "Gemeinden": "Gerlafingen"
    },
    {
      "PLZ": 4564,
      "Kanton": "SO",
      "Gemeinden": "Obergerlafingen, Zielebach"
    },
    {
      "PLZ": 4565,
      "Kanton": "SO",
      "Gemeinden": "Recherswil"
    },
    {
      "PLZ": 4566,
      "Kanton": "SO",
      "Gemeinden": "Halten, Kriegstetten, Oekingen"
    },
    {
      "PLZ": 4571,
      "Kanton": "SO",
      "Gemeinden": "L�terkofen-Ichertswil"
    },
    {
      "PLZ": 4573,
      "Kanton": "SO",
      "Gemeinden": "Lohn-Ammannsegg"
    },
    {
      "PLZ": 4574,
      "Kanton": "SO",
      "Gemeinden": "L�sslingen-Nennigkofen"
    },
    {
      "PLZ": 4576,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4577,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4578,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4579,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4581,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4582,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4583,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4584,
      "Kanton": "SO",
      "Gemeinden": "L�terswil-G�chliwil"
    },
    {
      "PLZ": 4585,
      "Kanton": "SO",
      "Gemeinden": "Biezwil"
    },
    {
      "PLZ": 4586,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4587,
      "Kanton": "SO",
      "Gemeinden": "Buchegg"
    },
    {
      "PLZ": 4588,
      "Kanton": "SO",
      "Gemeinden": "Buchegg, Messen, Unterramsern"
    },
    {
      "PLZ": 4600,
      "Kanton": "SO",
      "Gemeinden": "Olten"
    },
    {
      "PLZ": 4612,
      "Kanton": "SO",
      "Gemeinden": "Wangen bei Olten"
    },
    {
      "PLZ": 4613,
      "Kanton": "SO",
      "Gemeinden": "Rickenbach (SO)"
    },
    {
      "PLZ": 4614,
      "Kanton": "SO",
      "Gemeinden": "H�gendorf"
    },
    {
      "PLZ": 4615,
      "Kanton": "SO",
      "Gemeinden": "H�gendorf"
    },
    {
      "PLZ": 4616,
      "Kanton": "SO",
      "Gemeinden": "Kappel (SO)"
    },
    {
      "PLZ": 4617,
      "Kanton": "SO",
      "Gemeinden": "Gunzgen"
    },
    {
      "PLZ": 4618,
      "Kanton": "SO",
      "Gemeinden": "Boningen"
    },
    {
      "PLZ": 4622,
      "Kanton": "SO",
      "Gemeinden": "Egerkingen"
    },
    {
      "PLZ": 4623,
      "Kanton": "SO",
      "Gemeinden": "Neuendorf"
    },
    {
      "PLZ": 4624,
      "Kanton": "SO",
      "Gemeinden": "H�rkingen"
    },
    {
      "PLZ": 4625,
      "Kanton": "SO",
      "Gemeinden": "Oberbuchsiten"
    },
    {
      "PLZ": 4626,
      "Kanton": "SO",
      "Gemeinden": "Niederbuchsiten"
    },
    {
      "PLZ": 4628,
      "Kanton": "SO",
      "Gemeinden": "Wolfwil"
    },
    {
      "PLZ": 4629,
      "Kanton": "SO",
      "Gemeinden": "Fulenbach"
    },
    {
      "PLZ": 4632,
      "Kanton": "SO",
      "Gemeinden": "Trimbach"
    },
    {
      "PLZ": 4633,
      "Kanton": "SO",
      "Gemeinden": "Hauenstein-Ifenthal"
    },
    {
      "PLZ": 4634,
      "Kanton": "SO",
      "Gemeinden": "Wisen (SO)"
    },
    {
      "PLZ": 4652,
      "Kanton": "SO",
      "Gemeinden": "Winznau"
    },
    {
      "PLZ": 4653,
      "Kanton": "SO",
      "Gemeinden": "Oberg�sgen"
    },
    {
      "PLZ": 4654,
      "Kanton": "SO",
      "Gemeinden": "Lostorf"
    },
    {
      "PLZ": 4655,
      "Kanton": "SO",
      "Gemeinden": "Rohr (SO), St�sslingen"
    },
    {
      "PLZ": 4656,
      "Kanton": "SO",
      "Gemeinden": "Starrkirch-Wil"
    },
    {
      "PLZ": 4657,
      "Kanton": "SO",
      "Gemeinden": "Dulliken"
    },
    {
      "PLZ": 4658,
      "Kanton": "SO",
      "Gemeinden": "D�niken"
    },
    {
      "PLZ": 4663,
      "Kanton": "AG",
      "Gemeinden": "Aarburg"
    },
    {
      "PLZ": 4665,
      "Kanton": "AG",
      "Gemeinden": "Oftringen"
    },
    {
      "PLZ": 4702,
      "Kanton": "SO",
      "Gemeinden": "Oensingen"
    },
    {
      "PLZ": 4703,
      "Kanton": "SO",
      "Gemeinden": "Kestenholz"
    },
    {
      "PLZ": 4704,
      "Kanton": "BE",
      "Gemeinden": "Niederbipp, Wolfisberg"
    },
    {
      "PLZ": 4710,
      "Kanton": "SO",
      "Gemeinden": "Balsthal"
    },
    {
      "PLZ": 4712,
      "Kanton": "SO",
      "Gemeinden": "Laupersdorf"
    },
    {
      "PLZ": 4713,
      "Kanton": "SO",
      "Gemeinden": "Matzendorf"
    },
    {
      "PLZ": 4714,
      "Kanton": "SO",
      "Gemeinden": "Aedermannsdorf"
    },
    {
      "PLZ": 4715,
      "Kanton": "SO",
      "Gemeinden": "Herbetswil"
    },
    {
      "PLZ": 4716,
      "Kanton": "SO",
      "Gemeinden": "G�nsbrunnen, Welschenrohr"
    },
    {
      "PLZ": 4717,
      "Kanton": "SO",
      "Gemeinden": "M�mliswil-Ramiswil"
    },
    {
      "PLZ": 4718,
      "Kanton": "SO",
      "Gemeinden": "Holderbank (SO)"
    },
    {
      "PLZ": 4719,
      "Kanton": "SO",
      "Gemeinden": "M�mliswil-Ramiswil"
    },
    {
      "PLZ": 4800,
      "Kanton": "AG",
      "Gemeinden": "Zofingen"
    },
    {
      "PLZ": 4802,
      "Kanton": "AG",
      "Gemeinden": "Strengelbach"
    },
    {
      "PLZ": 4803,
      "Kanton": "AG",
      "Gemeinden": "Vordemwald"
    },
    {
      "PLZ": 4805,
      "Kanton": "AG",
      "Gemeinden": "Brittnau"
    },
    {
      "PLZ": 4806,
      "Kanton": "LU",
      "Gemeinden": "Wikon"
    },
    {
      "PLZ": 4812,
      "Kanton": "AG",
      "Gemeinden": "Zofingen"
    },
    {
      "PLZ": 4813,
      "Kanton": "AG",
      "Gemeinden": "Uerkheim"
    },
    {
      "PLZ": 4814,
      "Kanton": "AG",
      "Gemeinden": "Bottenwil"
    },
    {
      "PLZ": 4852,
      "Kanton": "AG",
      "Gemeinden": "Rothrist"
    },
    {
      "PLZ": 4853,
      "Kanton": "AG",
      "Gemeinden": "Murgenthal"
    },
    {
      "PLZ": 4856,
      "Kanton": "AG",
      "Gemeinden": "Murgenthal"
    },
    {
      "PLZ": 4900,
      "Kanton": "BE",
      "Gemeinden": "Langenthal"
    },
    {
      "PLZ": 4911,
      "Kanton": "BE",
      "Gemeinden": "Schwarzh�usern"
    },
    {
      "PLZ": 4912,
      "Kanton": "BE",
      "Gemeinden": "Aarwangen"
    },
    {
      "PLZ": 4913,
      "Kanton": "BE",
      "Gemeinden": "Bannwil"
    },
    {
      "PLZ": 4914,
      "Kanton": "BE",
      "Gemeinden": "Roggwil (BE)"
    },
    {
      "PLZ": 4915,
      "Kanton": "LU",
      "Gemeinden": "Pfaffnau"
    },
    {
      "PLZ": 4916,
      "Kanton": "BE",
      "Gemeinden": "Langenthal"
    },
    {
      "PLZ": 4917,
      "Kanton": "BE",
      "Gemeinden": "Busswil bei Melchnau, Melchnau"
    },
    {
      "PLZ": 4919,
      "Kanton": "BE",
      "Gemeinden": "Reisiswil"
    },
    {
      "PLZ": 4922,
      "Kanton": "BE",
      "Gemeinden": "Thunstetten"
    },
    {
      "PLZ": 4923,
      "Kanton": "BE",
      "Gemeinden": "Wynau"
    },
    {
      "PLZ": 4924,
      "Kanton": "BE",
      "Gemeinden": "Obersteckholz"
    },
    {
      "PLZ": 4932,
      "Kanton": "BE",
      "Gemeinden": "Madiswil, Lotzwil"
    },
    {
      "PLZ": 4933,
      "Kanton": "BE",
      "Gemeinden": "R�tschelen"
    },
    {
      "PLZ": 4934,
      "Kanton": "BE",
      "Gemeinden": "Madiswil"
    },
    {
      "PLZ": 4935,
      "Kanton": "BE",
      "Gemeinden": "Madiswil"
    },
    {
      "PLZ": 4936,
      "Kanton": "BE",
      "Gemeinden": "Madiswil"
    },
    {
      "PLZ": 4937,
      "Kanton": "BE",
      "Gemeinden": "Ursenbach"
    },
    {
      "PLZ": 4938,
      "Kanton": "BE",
      "Gemeinden": "Rohrbach, Rohrbachgraben"
    },
    {
      "PLZ": 4942,
      "Kanton": "BE",
      "Gemeinden": "Walterswil (BE)"
    },
    {
      "PLZ": 4943,
      "Kanton": "BE",
      "Gemeinden": "Oeschenbach"
    },
    {
      "PLZ": 4944,
      "Kanton": "BE",
      "Gemeinden": "Auswil"
    },
    {
      "PLZ": 4950,
      "Kanton": "BE",
      "Gemeinden": "Huttwil"
    },
    {
      "PLZ": 4952,
      "Kanton": "BE",
      "Gemeinden": "Eriswil"
    },
    {
      "PLZ": 4953,
      "Kanton": "BE",
      "Gemeinden": "Huttwil"
    },
    {
      "PLZ": 4954,
      "Kanton": "BE",
      "Gemeinden": "Wyssachen"
    },
    {
      "PLZ": 4955,
      "Kanton": "BE",
      "Gemeinden": "Gondiswil"
    },
    {
      "PLZ": 5000,
      "Kanton": "AG",
      "Gemeinden": "Aarau"
    },
    {
      "PLZ": 5004,
      "Kanton": "AG",
      "Gemeinden": "Aarau"
    },
    {
      "PLZ": 5012,
      "Kanton": "SO",
      "Gemeinden": "Eppenberg-W�schnau, Sch�nenwerd"
    },
    {
      "PLZ": 5013,
      "Kanton": "SO",
      "Gemeinden": "Niederg�sgen"
    },
    {
      "PLZ": 5014,
      "Kanton": "SO",
      "Gemeinden": "Gretzenbach"
    },
    {
      "PLZ": 5015,
      "Kanton": "SO",
      "Gemeinden": "Erlinsbach (SO)"
    },
    {
      "PLZ": 5017,
      "Kanton": "AG",
      "Gemeinden": "Erlinsbach (AG)"
    },
    {
      "PLZ": 5018,
      "Kanton": "AG",
      "Gemeinden": "Erlinsbach (AG)"
    },
    {
      "PLZ": 5022,
      "Kanton": "AG",
      "Gemeinden": "K�ttigen"
    },
    {
      "PLZ": 5023,
      "Kanton": "AG",
      "Gemeinden": "Biberstein"
    },
    {
      "PLZ": 5024,
      "Kanton": "AG",
      "Gemeinden": "K�ttigen"
    },
    {
      "PLZ": 5025,
      "Kanton": "AG",
      "Gemeinden": "Densb�ren"
    },
    {
      "PLZ": 5026,
      "Kanton": "AG",
      "Gemeinden": "Densb�ren"
    },
    {
      "PLZ": 5027,
      "Kanton": "AG",
      "Gemeinden": "Herznach"
    },
    {
      "PLZ": 5028,
      "Kanton": "AG",
      "Gemeinden": "Ueken"
    },
    {
      "PLZ": 5032,
      "Kanton": "AG",
      "Gemeinden": "Aarau"
    },
    {
      "PLZ": 5033,
      "Kanton": "AG",
      "Gemeinden": "Buchs (AG)"
    },
    {
      "PLZ": 5034,
      "Kanton": "AG",
      "Gemeinden": "Suhr"
    },
    {
      "PLZ": 5035,
      "Kanton": "AG",
      "Gemeinden": "Unterentfelden"
    },
    {
      "PLZ": 5036,
      "Kanton": "AG",
      "Gemeinden": "Oberentfelden"
    },
    {
      "PLZ": 5037,
      "Kanton": "AG",
      "Gemeinden": "Muhen"
    },
    {
      "PLZ": 5040,
      "Kanton": "AG",
      "Gemeinden": "Sch�ftland"
    },
    {
      "PLZ": 5042,
      "Kanton": "AG",
      "Gemeinden": "Hirschthal"
    },
    {
      "PLZ": 5043,
      "Kanton": "AG",
      "Gemeinden": "Holziken"
    },
    {
      "PLZ": 5044,
      "Kanton": "AG",
      "Gemeinden": "Schlossrued"
    },
    {
      "PLZ": 5046,
      "Kanton": "AG",
      "Gemeinden": "Schmiedrued"
    },
    {
      "PLZ": 5053,
      "Kanton": "AG",
      "Gemeinden": "Staffelbach"
    },
    {
      "PLZ": 5054,
      "Kanton": "AG",
      "Gemeinden": "Kirchleerau, Moosleerau"
    },
    {
      "PLZ": 5056,
      "Kanton": "AG",
      "Gemeinden": "Attelwil"
    },
    {
      "PLZ": 5057,
      "Kanton": "AG",
      "Gemeinden": "Reitnau"
    },
    {
      "PLZ": 5058,
      "Kanton": "AG",
      "Gemeinden": "Wiliberg"
    },
    {
      "PLZ": 5062,
      "Kanton": "AG",
      "Gemeinden": "Oberhof"
    },
    {
      "PLZ": 5063,
      "Kanton": "AG",
      "Gemeinden": "W�lflinswil"
    },
    {
      "PLZ": 5064,
      "Kanton": "AG",
      "Gemeinden": "Wittnau"
    },
    {
      "PLZ": 5070,
      "Kanton": "AG",
      "Gemeinden": "Frick"
    },
    {
      "PLZ": 5072,
      "Kanton": "AG",
      "Gemeinden": "Oeschgen"
    },
    {
      "PLZ": 5073,
      "Kanton": "AG",
      "Gemeinden": "Gipf-Oberfrick"
    },
    {
      "PLZ": 5074,
      "Kanton": "AG",
      "Gemeinden": "Eiken"
    },
    {
      "PLZ": 5075,
      "Kanton": "AG",
      "Gemeinden": "Hornussen"
    },
    {
      "PLZ": 5076,
      "Kanton": "AG",
      "Gemeinden": "B�zen"
    },
    {
      "PLZ": 5077,
      "Kanton": "AG",
      "Gemeinden": "Elfingen"
    },
    {
      "PLZ": 5078,
      "Kanton": "AG",
      "Gemeinden": "Effingen"
    },
    {
      "PLZ": 5079,
      "Kanton": "AG",
      "Gemeinden": "Zeihen"
    },
    {
      "PLZ": 5080,
      "Kanton": "AG",
      "Gemeinden": "Laufenburg"
    },
    {
      "PLZ": 5082,
      "Kanton": "AG",
      "Gemeinden": "Kaisten"
    },
    {
      "PLZ": 5083,
      "Kanton": "AG",
      "Gemeinden": "Kaisten"
    },
    {
      "PLZ": 5084,
      "Kanton": "AG",
      "Gemeinden": "Laufenburg"
    },
    {
      "PLZ": 5085,
      "Kanton": "AG",
      "Gemeinden": "Laufenburg"
    },
    {
      "PLZ": 5102,
      "Kanton": "AG",
      "Gemeinden": "Rupperswil"
    },
    {
      "PLZ": 5103,
      "Kanton": "AG",
      "Gemeinden": "M�riken-Wildegg"
    },
    {
      "PLZ": 5105,
      "Kanton": "AG",
      "Gemeinden": "Auenstein"
    },
    {
      "PLZ": 5106,
      "Kanton": "AG",
      "Gemeinden": "Veltheim (AG)"
    },
    {
      "PLZ": 5107,
      "Kanton": "AG",
      "Gemeinden": "Schinznach"
    },
    {
      "PLZ": 5108,
      "Kanton": "AG",
      "Gemeinden": "Schinznach"
    },
    {
      "PLZ": 5112,
      "Kanton": "AG",
      "Gemeinden": "Thalheim (AG)"
    },
    {
      "PLZ": 5113,
      "Kanton": "AG",
      "Gemeinden": "Holderbank (AG)"
    },
    {
      "PLZ": 5116,
      "Kanton": "AG",
      "Gemeinden": "Schinznach-Bad"
    },
    {
      "PLZ": 5200,
      "Kanton": "AG",
      "Gemeinden": "Brugg"
    },
    {
      "PLZ": 5210,
      "Kanton": "AG",
      "Gemeinden": "Windisch"
    },
    {
      "PLZ": 5212,
      "Kanton": "AG",
      "Gemeinden": "Hausen (AG)"
    },
    {
      "PLZ": 5213,
      "Kanton": "AG",
      "Gemeinden": "Villnachern"
    },
    {
      "PLZ": 5222,
      "Kanton": "AG",
      "Gemeinden": "Brugg"
    },
    {
      "PLZ": 5223,
      "Kanton": "AG",
      "Gemeinden": "Riniken"
    },
    {
      "PLZ": 5225,
      "Kanton": "AG",
      "Gemeinden": "B�zberg"
    },
    {
      "PLZ": 5233,
      "Kanton": "AG",
      "Gemeinden": "Villigen"
    },
    {
      "PLZ": 5234,
      "Kanton": "AG",
      "Gemeinden": "Villigen"
    },
    {
      "PLZ": 5235,
      "Kanton": "AG",
      "Gemeinden": "R�fenach"
    },
    {
      "PLZ": 5236,
      "Kanton": "AG",
      "Gemeinden": "Remigen"
    },
    {
      "PLZ": 5237,
      "Kanton": "AG",
      "Gemeinden": "M�nthal"
    },
    {
      "PLZ": 5242,
      "Kanton": "AG",
      "Gemeinden": "Birr, Lupfig"
    },
    {
      "PLZ": 5243,
      "Kanton": "AG",
      "Gemeinden": "M�lligen"
    },
    {
      "PLZ": 5244,
      "Kanton": "AG",
      "Gemeinden": "Birrhard"
    },
    {
      "PLZ": 5245,
      "Kanton": "AG",
      "Gemeinden": "Habsburg"
    },
    {
      "PLZ": 5246,
      "Kanton": "AG",
      "Gemeinden": "Scherz"
    },
    {
      "PLZ": 5272,
      "Kanton": "AG",
      "Gemeinden": "Gansingen"
    },
    {
      "PLZ": 5273,
      "Kanton": "AG",
      "Gemeinden": "Mettauertal"
    },
    {
      "PLZ": 5274,
      "Kanton": "AG",
      "Gemeinden": "Mettauertal"
    },
    {
      "PLZ": 5275,
      "Kanton": "AG",
      "Gemeinden": "Mettauertal"
    },
    {
      "PLZ": 5276,
      "Kanton": "AG",
      "Gemeinden": "Mettauertal"
    },
    {
      "PLZ": 5277,
      "Kanton": "AG",
      "Gemeinden": "Mettauertal"
    },
    {
      "PLZ": 5300,
      "Kanton": "AG",
      "Gemeinden": "Turgi"
    },
    {
      "PLZ": 5301,
      "Kanton": "AG",
      "Gemeinden": "Untersiggenthal"
    },
    {
      "PLZ": 5303,
      "Kanton": "AG",
      "Gemeinden": "W�renlingen"
    },
    {
      "PLZ": 5304,
      "Kanton": "AG",
      "Gemeinden": "Endingen"
    },
    {
      "PLZ": 5305,
      "Kanton": "AG",
      "Gemeinden": "Endingen"
    },
    {
      "PLZ": 5306,
      "Kanton": "AG",
      "Gemeinden": "Tegerfelden"
    },
    {
      "PLZ": 5312,
      "Kanton": "AG",
      "Gemeinden": "D�ttingen"
    },
    {
      "PLZ": 5313,
      "Kanton": "AG",
      "Gemeinden": "Klingnau"
    },
    {
      "PLZ": 5314,
      "Kanton": "AG",
      "Gemeinden": "B�ttstein"
    },
    {
      "PLZ": 5315,
      "Kanton": "AG",
      "Gemeinden": "B�ttstein"
    },
    {
      "PLZ": 5316,
      "Kanton": "AG",
      "Gemeinden": "Leuggern"
    },
    {
      "PLZ": 5317,
      "Kanton": "AG",
      "Gemeinden": "Leuggern"
    },
    {
      "PLZ": 5318,
      "Kanton": "AG",
      "Gemeinden": "Mandach"
    },
    {
      "PLZ": 5322,
      "Kanton": "AG",
      "Gemeinden": "Koblenz"
    },
    {
      "PLZ": 5323,
      "Kanton": "AG",
      "Gemeinden": "Rietheim"
    },
    {
      "PLZ": 5324,
      "Kanton": "AG",
      "Gemeinden": "Full-Reuenthal"
    },
    {
      "PLZ": 5325,
      "Kanton": "AG",
      "Gemeinden": "Leibstadt"
    },
    {
      "PLZ": 5326,
      "Kanton": "AG",
      "Gemeinden": "Schwaderloch"
    },
    {
      "PLZ": 5330,
      "Kanton": "AG",
      "Gemeinden": "Bad Zurzach"
    },
    {
      "PLZ": 5332,
      "Kanton": "AG",
      "Gemeinden": "Rekingen (AG)"
    },
    {
      "PLZ": 5333,
      "Kanton": "AG",
      "Gemeinden": "Baldingen"
    },
    {
      "PLZ": 5334,
      "Kanton": "AG",
      "Gemeinden": "B�bikon"
    },
    {
      "PLZ": 5400,
      "Kanton": "AG",
      "Gemeinden": "Baden"
    },
    {
      "PLZ": 5404,
      "Kanton": "AG",
      "Gemeinden": "Baden"
    },
    {
      "PLZ": 5405,
      "Kanton": "AG",
      "Gemeinden": "Baden"
    },
    {
      "PLZ": 5406,
      "Kanton": "AG",
      "Gemeinden": "Baden"
    },
    {
      "PLZ": 5408,
      "Kanton": "AG",
      "Gemeinden": "Ennetbaden"
    },
    {
      "PLZ": 5412,
      "Kanton": "AG",
      "Gemeinden": "Gebenstorf"
    },
    {
      "PLZ": 5413,
      "Kanton": "AG",
      "Gemeinden": "Birmenstorf (AG)"
    },
    {
      "PLZ": 5415,
      "Kanton": "AG",
      "Gemeinden": "Obersiggenthal"
    },
    {
      "PLZ": 5416,
      "Kanton": "AG",
      "Gemeinden": "Obersiggenthal"
    },
    {
      "PLZ": 5417,
      "Kanton": "AG",
      "Gemeinden": "Untersiggenthal"
    },
    {
      "PLZ": 5420,
      "Kanton": "AG",
      "Gemeinden": "Ehrendingen"
    },
    {
      "PLZ": 5423,
      "Kanton": "AG",
      "Gemeinden": "Freienwil"
    },
    {
      "PLZ": 5425,
      "Kanton": "AG",
      "Gemeinden": "Schneisingen"
    },
    {
      "PLZ": 5426,
      "Kanton": "AG",
      "Gemeinden": "Lengnau (AG)"
    },
    {
      "PLZ": 5430,
      "Kanton": "AG",
      "Gemeinden": "Wettingen"
    },
    {
      "PLZ": 5432,
      "Kanton": "AG",
      "Gemeinden": "Neuenhof"
    },
    {
      "PLZ": 5436,
      "Kanton": "AG",
      "Gemeinden": "W�renlos"
    },
    {
      "PLZ": 5442,
      "Kanton": "AG",
      "Gemeinden": "Fislisbach"
    },
    {
      "PLZ": 5443,
      "Kanton": "AG",
      "Gemeinden": "Niederrohrdorf"
    },
    {
      "PLZ": 5444,
      "Kanton": "AG",
      "Gemeinden": "K�nten"
    },
    {
      "PLZ": 5445,
      "Kanton": "AG",
      "Gemeinden": "Eggenwil"
    },
    {
      "PLZ": 5452,
      "Kanton": "AG",
      "Gemeinden": "Oberrohrdorf"
    },
    {
      "PLZ": 5453,
      "Kanton": "AG",
      "Gemeinden": "Remetschwil"
    },
    {
      "PLZ": 5454,
      "Kanton": "AG",
      "Gemeinden": "Bellikon"
    },
    {
      "PLZ": 5462,
      "Kanton": "AG",
      "Gemeinden": "Siglistorf"
    },
    {
      "PLZ": 5463,
      "Kanton": "AG",
      "Gemeinden": "Wislikofen"
    },
    {
      "PLZ": 5464,
      "Kanton": "AG",
      "Gemeinden": "R�mikon"
    },
    {
      "PLZ": 5465,
      "Kanton": "AG",
      "Gemeinden": "Mellikon"
    },
    {
      "PLZ": 5466,
      "Kanton": "AG",
      "Gemeinden": "Kaiserstuhl"
    },
    {
      "PLZ": 5467,
      "Kanton": "AG",
      "Gemeinden": "Fisibach"
    },
    {
      "PLZ": 5502,
      "Kanton": "AG",
      "Gemeinden": "Hunzenschwil"
    },
    {
      "PLZ": 5503,
      "Kanton": "AG",
      "Gemeinden": "Schafisheim"
    },
    {
      "PLZ": 5504,
      "Kanton": "AG",
      "Gemeinden": "Othmarsingen"
    },
    {
      "PLZ": 5505,
      "Kanton": "AG",
      "Gemeinden": "Brunegg"
    },
    {
      "PLZ": 5506,
      "Kanton": "AG",
      "Gemeinden": "M�genwil"
    },
    {
      "PLZ": 5507,
      "Kanton": "AG",
      "Gemeinden": "Mellingen"
    },
    {
      "PLZ": 5512,
      "Kanton": "AG",
      "Gemeinden": "Wohlenschwil"
    },
    {
      "PLZ": 5522,
      "Kanton": "AG",
      "Gemeinden": "T�gerig"
    },
    {
      "PLZ": 5524,
      "Kanton": "AG",
      "Gemeinden": "Niederwil (AG)"
    },
    {
      "PLZ": 5525,
      "Kanton": "AG",
      "Gemeinden": "Fischbach-G�slikon"
    },
    {
      "PLZ": 5600,
      "Kanton": "AG",
      "Gemeinden": "Ammerswil, Lenzburg"
    },
    {
      "PLZ": 5603,
      "Kanton": "AG",
      "Gemeinden": "Staufen"
    },
    {
      "PLZ": 5604,
      "Kanton": "AG",
      "Gemeinden": "Hendschiken"
    },
    {
      "PLZ": 5605,
      "Kanton": "AG",
      "Gemeinden": "Dottikon"
    },
    {
      "PLZ": 5606,
      "Kanton": "AG",
      "Gemeinden": "Dintikon"
    },
    {
      "PLZ": 5607,
      "Kanton": "AG",
      "Gemeinden": "H�gglingen"
    },
    {
      "PLZ": 5608,
      "Kanton": "AG",
      "Gemeinden": "Stetten (AG)"
    },
    {
      "PLZ": 5610,
      "Kanton": "AG",
      "Gemeinden": "Wohlen (AG)"
    },
    {
      "PLZ": 5611,
      "Kanton": "AG",
      "Gemeinden": "Wohlen (AG)"
    },
    {
      "PLZ": 5612,
      "Kanton": "AG",
      "Gemeinden": "Villmergen"
    },
    {
      "PLZ": 5613,
      "Kanton": "AG",
      "Gemeinden": "Villmergen"
    },
    {
      "PLZ": 5614,
      "Kanton": "AG",
      "Gemeinden": "Sarmenstorf"
    },
    {
      "PLZ": 5615,
      "Kanton": "AG",
      "Gemeinden": "Fahrwangen"
    },
    {
      "PLZ": 5616,
      "Kanton": "AG",
      "Gemeinden": "Meisterschwanden"
    },
    {
      "PLZ": 5617,
      "Kanton": "AG",
      "Gemeinden": "Meisterschwanden"
    },
    {
      "PLZ": 5618,
      "Kanton": "AG",
      "Gemeinden": "Bettwil"
    },
    {
      "PLZ": 5619,
      "Kanton": "AG",
      "Gemeinden": "B�ttikon, Uezwil"
    },
    {
      "PLZ": 5620,
      "Kanton": "AG",
      "Gemeinden": "Bremgarten (AG)"
    },
    {
      "PLZ": 5621,
      "Kanton": "AG",
      "Gemeinden": "Zufikon"
    },
    {
      "PLZ": 5622,
      "Kanton": "AG",
      "Gemeinden": "Waltenschwil"
    },
    {
      "PLZ": 5623,
      "Kanton": "AG",
      "Gemeinden": "Boswil"
    },
    {
      "PLZ": 5624,
      "Kanton": "AG",
      "Gemeinden": "B�nzen"
    },
    {
      "PLZ": 5625,
      "Kanton": "AG",
      "Gemeinden": "Kallern"
    },
    {
      "PLZ": 5626,
      "Kanton": "AG",
      "Gemeinden": "Bremgarten (AG)"
    },
    {
      "PLZ": 5627,
      "Kanton": "AG",
      "Gemeinden": "Besenb�ren"
    },
    {
      "PLZ": 5628,
      "Kanton": "AG",
      "Gemeinden": "Aristau"
    },
    {
      "PLZ": 5630,
      "Kanton": "AG",
      "Gemeinden": "MUR (AG)"
    },
    {
      "PLZ": 5632,
      "Kanton": "AG",
      "Gemeinden": "Buttwil"
    },
    {
      "PLZ": 5634,
      "Kanton": "AG",
      "Gemeinden": "Merenschwand"
    },
    {
      "PLZ": 5636,
      "Kanton": "AG",
      "Gemeinden": "Merenschwand"
    },
    {
      "PLZ": 5637,
      "Kanton": "AG",
      "Gemeinden": "Beinwil (Freiamt), Geltwil"
    },
    {
      "PLZ": 5642,
      "Kanton": "AG",
      "Gemeinden": "M�hlau"
    },
    {
      "PLZ": 5643,
      "Kanton": "AG",
      "Gemeinden": "Sins"
    },
    {
      "PLZ": 5644,
      "Kanton": "AG",
      "Gemeinden": "Auw"
    },
    {
      "PLZ": 5645,
      "Kanton": "AG",
      "Gemeinden": "Sins"
    },
    {
      "PLZ": 5646,
      "Kanton": "AG",
      "Gemeinden": "Abtwil"
    },
    {
      "PLZ": 5647,
      "Kanton": "AG",
      "Gemeinden": "Oberr�ti"
    },
    {
      "PLZ": 5702,
      "Kanton": "AG",
      "Gemeinden": "Niederlenz"
    },
    {
      "PLZ": 5703,
      "Kanton": "AG",
      "Gemeinden": "Seon"
    },
    {
      "PLZ": 5704,
      "Kanton": "AG",
      "Gemeinden": "Egliswil"
    },
    {
      "PLZ": 5705,
      "Kanton": "AG",
      "Gemeinden": "Hallwil"
    },
    {
      "PLZ": 5706,
      "Kanton": "AG",
      "Gemeinden": "Boniswil"
    },
    {
      "PLZ": 5707,
      "Kanton": "AG",
      "Gemeinden": "Seengen"
    },
    {
      "PLZ": 5708,
      "Kanton": "AG",
      "Gemeinden": "Birrwil"
    },
    {
      "PLZ": 5712,
      "Kanton": "AG",
      "Gemeinden": "Beinwil am See"
    },
    {
      "PLZ": 5722,
      "Kanton": "AG",
      "Gemeinden": "Gr�nichen"
    },
    {
      "PLZ": 5723,
      "Kanton": "AG",
      "Gemeinden": "Teufenthal (AG)"
    },
    {
      "PLZ": 5724,
      "Kanton": "AG",
      "Gemeinden": "D�rren�sch"
    },
    {
      "PLZ": 5725,
      "Kanton": "AG",
      "Gemeinden": "Leutwil"
    },
    {
      "PLZ": 5726,
      "Kanton": "AG",
      "Gemeinden": "Unterkulm"
    },
    {
      "PLZ": 5727,
      "Kanton": "AG",
      "Gemeinden": "Oberkulm"
    },
    {
      "PLZ": 5728,
      "Kanton": "AG",
      "Gemeinden": "Gontenschwil"
    },
    {
      "PLZ": 5732,
      "Kanton": "AG",
      "Gemeinden": "Zetzwil"
    },
    {
      "PLZ": 5733,
      "Kanton": "AG",
      "Gemeinden": "Leimbach (AG)"
    },
    {
      "PLZ": 5734,
      "Kanton": "AG",
      "Gemeinden": "Reinach (AG)"
    },
    {
      "PLZ": 5735,
      "Kanton": "LU",
      "Gemeinden": "Rickenbach (LU)"
    },
    {
      "PLZ": 5736,
      "Kanton": "AG",
      "Gemeinden": "Burg (AG)"
    },
    {
      "PLZ": 5737,
      "Kanton": "AG",
      "Gemeinden": "Menziken"
    },
    {
      "PLZ": 5742,
      "Kanton": "AG",
      "Gemeinden": "K�lliken"
    },
    {
      "PLZ": 5745,
      "Kanton": "AG",
      "Gemeinden": "Safenwil"
    },
    {
      "PLZ": 5746,
      "Kanton": "SO",
      "Gemeinden": "Walterswil (SO)"
    },
    {
      "PLZ": 6003,
      "Kanton": "LU",
      "Gemeinden": "LU"
    },
    {
      "PLZ": 6004,
      "Kanton": "LU",
      "Gemeinden": "LU"
    },
    {
      "PLZ": 6005,
      "Kanton": "LU",
      "Gemeinden": "LU, Horw"
    },
    {
      "PLZ": 6006,
      "Kanton": "LU",
      "Gemeinden": "LU"
    },
    {
      "PLZ": 6010,
      "Kanton": "OW",
      "Gemeinden": "Alpnach, Kriens"
    },
    {
      "PLZ": 6012,
      "Kanton": "LU",
      "Gemeinden": "Kriens"
    },
    {
      "PLZ": 6013,
      "Kanton": "LU",
      "Gemeinden": "Schwarzenberg"
    },
    {
      "PLZ": 6014,
      "Kanton": "LU",
      "Gemeinden": "LU"
    },
    {
      "PLZ": 6015,
      "Kanton": "LU",
      "Gemeinden": "LU"
    },
    {
      "PLZ": 6016,
      "Kanton": "LU",
      "Gemeinden": "Neuenkirch"
    },
    {
      "PLZ": 6017,
      "Kanton": "LU",
      "Gemeinden": "Ruswil"
    },
    {
      "PLZ": 6018,
      "Kanton": "LU",
      "Gemeinden": "Buttisholz"
    },
    {
      "PLZ": 6019,
      "Kanton": "LU",
      "Gemeinden": "Ruswil"
    },
    {
      "PLZ": 6020,
      "Kanton": "LU",
      "Gemeinden": "Emmen"
    },
    {
      "PLZ": 6022,
      "Kanton": "LU",
      "Gemeinden": "Grosswangen"
    },
    {
      "PLZ": 6023,
      "Kanton": "LU",
      "Gemeinden": "Rothenburg"
    },
    {
      "PLZ": 6024,
      "Kanton": "LU",
      "Gemeinden": "Hildisrieden"
    },
    {
      "PLZ": 6025,
      "Kanton": "LU",
      "Gemeinden": "Berom�nster"
    },
    {
      "PLZ": 6026,
      "Kanton": "LU",
      "Gemeinden": "Rain"
    },
    {
      "PLZ": 6027,
      "Kanton": "LU",
      "Gemeinden": "R�merswil"
    },
    {
      "PLZ": 6028,
      "Kanton": "LU",
      "Gemeinden": "R�merswil"
    },
    {
      "PLZ": 6030,
      "Kanton": "LU",
      "Gemeinden": "Ebikon"
    },
    {
      "PLZ": 6032,
      "Kanton": "LU",
      "Gemeinden": "Emmen"
    },
    {
      "PLZ": 6033,
      "Kanton": "LU",
      "Gemeinden": "Buchrain"
    },
    {
      "PLZ": 6034,
      "Kanton": "LU",
      "Gemeinden": "Inwil"
    },
    {
      "PLZ": 6035,
      "Kanton": "LU",
      "Gemeinden": "Buchrain"
    },
    {
      "PLZ": 6036,
      "Kanton": "LU",
      "Gemeinden": "Dierikon"
    },
    {
      "PLZ": 6037,
      "Kanton": "LU",
      "Gemeinden": "Root"
    },
    {
      "PLZ": 6038,
      "Kanton": "LU",
      "Gemeinden": "Gisikon, Honau"
    },
    {
      "PLZ": 6039,
      "Kanton": "LU",
      "Gemeinden": "Root"
    },
    {
      "PLZ": 6042,
      "Kanton": "AG",
      "Gemeinden": "Dietwil"
    },
    {
      "PLZ": 6043,
      "Kanton": "LU",
      "Gemeinden": "Adligenswil"
    },
    {
      "PLZ": 6044,
      "Kanton": "LU",
      "Gemeinden": "Udligenswil"
    },
    {
      "PLZ": 6045,
      "Kanton": "LU",
      "Gemeinden": "Meggen"
    },
    {
      "PLZ": 6047,
      "Kanton": "LU",
      "Gemeinden": "Horw"
    },
    {
      "PLZ": 6048,
      "Kanton": "LU",
      "Gemeinden": "Horw"
    },
    {
      "PLZ": 6052,
      "Kanton": "NW",
      "Gemeinden": "Hergiswil (NW)"
    },
    {
      "PLZ": 6053,
      "Kanton": "OW",
      "Gemeinden": "Alpnach"
    },
    {
      "PLZ": 6055,
      "Kanton": "OW",
      "Gemeinden": "Alpnach"
    },
    {
      "PLZ": 6056,
      "Kanton": "OW",
      "Gemeinden": "Sarnen"
    },
    {
      "PLZ": 6060,
      "Kanton": "OW",
      "Gemeinden": "Sarnen"
    },
    {
      "PLZ": 6062,
      "Kanton": "OW",
      "Gemeinden": "Sarnen"
    },
    {
      "PLZ": 6063,
      "Kanton": "OW",
      "Gemeinden": "Sarnen"
    },
    {
      "PLZ": 6064,
      "Kanton": "OW",
      "Gemeinden": "Kerns"
    },
    {
      "PLZ": 6066,
      "Kanton": "OW",
      "Gemeinden": "Kerns"
    },
    {
      "PLZ": 6067,
      "Kanton": "OW",
      "Gemeinden": "Kerns"
    },
    {
      "PLZ": 6068,
      "Kanton": "OW",
      "Gemeinden": "Kerns"
    },
    {
      "PLZ": 6072,
      "Kanton": "OW",
      "Gemeinden": "Sachseln"
    },
    {
      "PLZ": 6073,
      "Kanton": "OW",
      "Gemeinden": "Sachseln"
    },
    {
      "PLZ": 6074,
      "Kanton": "OW",
      "Gemeinden": "Giswil"
    },
    {
      "PLZ": 6078,
      "Kanton": "OW",
      "Gemeinden": "Lungern"
    },
    {
      "PLZ": 6083,
      "Kanton": "BE",
      "Gemeinden": "Hasliberg"
    },
    {
      "PLZ": 6084,
      "Kanton": "BE",
      "Gemeinden": "Hasliberg"
    },
    {
      "PLZ": 6085,
      "Kanton": "BE",
      "Gemeinden": "Hasliberg"
    },
    {
      "PLZ": 6086,
      "Kanton": "BE",
      "Gemeinden": "Hasliberg"
    },
    {
      "PLZ": 6102,
      "Kanton": "LU",
      "Gemeinden": "Malters"
    },
    {
      "PLZ": 6103,
      "Kanton": "LU",
      "Gemeinden": "Schwarzenberg"
    },
    {
      "PLZ": 6105,
      "Kanton": "LU",
      "Gemeinden": "Werthenstein"
    },
    {
      "PLZ": 6106,
      "Kanton": "LU",
      "Gemeinden": "Werthenstein"
    },
    {
      "PLZ": 6110,
      "Kanton": "LU",
      "Gemeinden": "Wolhusen"
    },
    {
      "PLZ": 6112,
      "Kanton": "LU",
      "Gemeinden": "Doppleschwand"
    },
    {
      "PLZ": 6113,
      "Kanton": "LU",
      "Gemeinden": "Romoos"
    },
    {
      "PLZ": 6114,
      "Kanton": "LU",
      "Gemeinden": "Wolhusen"
    },
    {
      "PLZ": 6122,
      "Kanton": "LU",
      "Gemeinden": "Menznau"
    },
    {
      "PLZ": 6123,
      "Kanton": "LU",
      "Gemeinden": "Menznau"
    },
    {
      "PLZ": 6125,
      "Kanton": "LU",
      "Gemeinden": "Menznau"
    },
    {
      "PLZ": 6126,
      "Kanton": "LU",
      "Gemeinden": "Willisau"
    },
    {
      "PLZ": 6130,
      "Kanton": "LU",
      "Gemeinden": "Willisau"
    },
    {
      "PLZ": 6132,
      "Kanton": "LU",
      "Gemeinden": "Willisau"
    },
    {
      "PLZ": 6133,
      "Kanton": "LU",
      "Gemeinden": "Hergiswil bei Willisau"
    },
    {
      "PLZ": 6142,
      "Kanton": "LU",
      "Gemeinden": "Gettnau"
    },
    {
      "PLZ": 6143,
      "Kanton": "LU",
      "Gemeinden": "Sch�tz"
    },
    {
      "PLZ": 6144,
      "Kanton": "LU",
      "Gemeinden": "Zell (LU)"
    },
    {
      "PLZ": 6145,
      "Kanton": "LU",
      "Gemeinden": "Fischbach"
    },
    {
      "PLZ": 6146,
      "Kanton": "LU",
      "Gemeinden": "Grossdietwil"
    },
    {
      "PLZ": 6147,
      "Kanton": "LU",
      "Gemeinden": "Altb�ron"
    },
    {
      "PLZ": 6152,
      "Kanton": "LU",
      "Gemeinden": "Zell (LU)"
    },
    {
      "PLZ": 6153,
      "Kanton": "LU",
      "Gemeinden": "Ufhusen"
    },
    {
      "PLZ": 6154,
      "Kanton": "LU",
      "Gemeinden": "Luthern"
    },
    {
      "PLZ": 6156,
      "Kanton": "LU",
      "Gemeinden": "Luthern"
    },
    {
      "PLZ": 6162,
      "Kanton": "LU",
      "Gemeinden": "Entlebuch"
    },
    {
      "PLZ": 6163,
      "Kanton": "LU",
      "Gemeinden": "Entlebuch"
    },
    {
      "PLZ": 6166,
      "Kanton": "LU",
      "Gemeinden": "Hasle (LU)"
    },
    {
      "PLZ": 6167,
      "Kanton": "LU",
      "Gemeinden": "Romoos"
    },
    {
      "PLZ": 6170,
      "Kanton": "LU",
      "Gemeinden": "Sch�pfheim"
    },
    {
      "PLZ": 6173,
      "Kanton": "LU",
      "Gemeinden": "Fl�hli"
    },
    {
      "PLZ": 6174,
      "Kanton": "LU",
      "Gemeinden": "Fl�hli"
    },
    {
      "PLZ": 6182,
      "Kanton": "LU",
      "Gemeinden": "Escholzmatt-Marbach"
    },
    {
      "PLZ": 6192,
      "Kanton": "LU",
      "Gemeinden": "Escholzmatt-Marbach"
    },
    {
      "PLZ": 6196,
      "Kanton": "LU",
      "Gemeinden": "Escholzmatt-Marbach"
    },
    {
      "PLZ": 6197,
      "Kanton": "BE",
      "Gemeinden": "Schangnau"
    },
    {
      "PLZ": 6203,
      "Kanton": "LU",
      "Gemeinden": "Neuenkirch"
    },
    {
      "PLZ": 6204,
      "Kanton": "LU",
      "Gemeinden": "Sempach"
    },
    {
      "PLZ": 6205,
      "Kanton": "LU",
      "Gemeinden": "Eich"
    },
    {
      "PLZ": 6206,
      "Kanton": "LU",
      "Gemeinden": "Neuenkirch"
    },
    {
      "PLZ": 6207,
      "Kanton": "LU",
      "Gemeinden": "Nottwil"
    },
    {
      "PLZ": 6208,
      "Kanton": "LU",
      "Gemeinden": "Oberkirch"
    },
    {
      "PLZ": 6210,
      "Kanton": "LU",
      "Gemeinden": "Sursee"
    },
    {
      "PLZ": 6211,
      "Kanton": "LU",
      "Gemeinden": "Dagmersellen"
    },
    {
      "PLZ": 6212,
      "Kanton": "LU",
      "Gemeinden": "Mauensee, Knutwil"
    },
    {
      "PLZ": 6213,
      "Kanton": "LU",
      "Gemeinden": "Knutwil"
    },
    {
      "PLZ": 6214,
      "Kanton": "LU",
      "Gemeinden": "Schenkon"
    },
    {
      "PLZ": 6215,
      "Kanton": "LU",
      "Gemeinden": "Berom�nster"
    },
    {
      "PLZ": 6216,
      "Kanton": "LU",
      "Gemeinden": "Mauensee"
    },
    {
      "PLZ": 6217,
      "Kanton": "LU",
      "Gemeinden": "Ettiswil"
    },
    {
      "PLZ": 6218,
      "Kanton": "LU",
      "Gemeinden": "Ettiswil"
    },
    {
      "PLZ": 6221,
      "Kanton": "LU",
      "Gemeinden": "Rickenbach (LU)"
    },
    {
      "PLZ": 6222,
      "Kanton": "LU",
      "Gemeinden": "Berom�nster"
    },
    {
      "PLZ": 6231,
      "Kanton": "LU",
      "Gemeinden": "Schlierbach"
    },
    {
      "PLZ": 6232,
      "Kanton": "LU",
      "Gemeinden": "Geuensee"
    },
    {
      "PLZ": 6233,
      "Kanton": "LU",
      "Gemeinden": "B�ron"
    },
    {
      "PLZ": 6234,
      "Kanton": "LU",
      "Gemeinden": "Triengen"
    },
    {
      "PLZ": 6235,
      "Kanton": "LU",
      "Gemeinden": "Triengen"
    },
    {
      "PLZ": 6236,
      "Kanton": "LU",
      "Gemeinden": "Triengen"
    },
    {
      "PLZ": 6242,
      "Kanton": "LU",
      "Gemeinden": "Wauwil"
    },
    {
      "PLZ": 6243,
      "Kanton": "LU",
      "Gemeinden": "Egolzwil"
    },
    {
      "PLZ": 6244,
      "Kanton": "LU",
      "Gemeinden": "Nebikon"
    },
    {
      "PLZ": 6245,
      "Kanton": "LU",
      "Gemeinden": "Ebersecken"
    },
    {
      "PLZ": 6246,
      "Kanton": "LU",
      "Gemeinden": "Altishofen"
    },
    {
      "PLZ": 6247,
      "Kanton": "LU",
      "Gemeinden": "Sch�tz"
    },
    {
      "PLZ": 6248,
      "Kanton": "LU",
      "Gemeinden": "Alberswil"
    },
    {
      "PLZ": 6252,
      "Kanton": "LU",
      "Gemeinden": "Dagmersellen"
    },
    {
      "PLZ": 6253,
      "Kanton": "LU",
      "Gemeinden": "Dagmersellen"
    },
    {
      "PLZ": 6260,
      "Kanton": "LU",
      "Gemeinden": "Wikon, Reiden"
    },
    {
      "PLZ": 6262,
      "Kanton": "LU",
      "Gemeinden": "Reiden"
    },
    {
      "PLZ": 6263,
      "Kanton": "LU",
      "Gemeinden": "Reiden"
    },
    {
      "PLZ": 6264,
      "Kanton": "LU",
      "Gemeinden": "Pfaffnau"
    },
    {
      "PLZ": 6265,
      "Kanton": "LU",
      "Gemeinden": "Roggliswil"
    },
    {
      "PLZ": 6274,
      "Kanton": "LU",
      "Gemeinden": "Eschenbach (LU)"
    },
    {
      "PLZ": 6275,
      "Kanton": "LU",
      "Gemeinden": "Ballwil"
    },
    {
      "PLZ": 6276,
      "Kanton": "LU",
      "Gemeinden": "Hohenrain"
    },
    {
      "PLZ": 6277,
      "Kanton": "LU",
      "Gemeinden": "Hohenrain"
    },
    {
      "PLZ": 6280,
      "Kanton": "LU",
      "Gemeinden": "Hochdorf"
    },
    {
      "PLZ": 6283,
      "Kanton": "LU",
      "Gemeinden": "Hochdorf"
    },
    {
      "PLZ": 6284,
      "Kanton": "LU",
      "Gemeinden": "Hitzkirch"
    },
    {
      "PLZ": 6285,
      "Kanton": "LU",
      "Gemeinden": "Hitzkirch"
    },
    {
      "PLZ": 6286,
      "Kanton": "LU",
      "Gemeinden": "Altwis"
    },
    {
      "PLZ": 6287,
      "Kanton": "LU",
      "Gemeinden": "Aesch (LU)"
    },
    {
      "PLZ": 6288,
      "Kanton": "LU",
      "Gemeinden": "Schongau"
    },
    {
      "PLZ": 6289,
      "Kanton": "LU",
      "Gemeinden": "Hitzkirch"
    },
    {
      "PLZ": 6294,
      "Kanton": "LU",
      "Gemeinden": "Ermensee"
    },
    {
      "PLZ": 6295,
      "Kanton": "LU",
      "Gemeinden": "Hitzkirch"
    },
    {
      "PLZ": 6300,
      "Kanton": "ZG",
      "Gemeinden": "ZG"
    },
    {
      "PLZ": 6312,
      "Kanton": "ZG",
      "Gemeinden": "Steinhausen"
    },
    {
      "PLZ": 6313,
      "Kanton": "ZG",
      "Gemeinden": "Menzingen"
    },
    {
      "PLZ": 6314,
      "Kanton": "ZG",
      "Gemeinden": "Unter�geri"
    },
    {
      "PLZ": 6315,
      "Kanton": "ZG",
      "Gemeinden": "Ober�geri"
    },
    {
      "PLZ": 6317,
      "Kanton": "ZG",
      "Gemeinden": "ZG"
    },
    {
      "PLZ": 6318,
      "Kanton": "ZG",
      "Gemeinden": "Walchwil"
    },
    {
      "PLZ": 6319,
      "Kanton": "ZG",
      "Gemeinden": "Baar"
    },
    {
      "PLZ": 6330,
      "Kanton": "ZG",
      "Gemeinden": "Cham"
    },
    {
      "PLZ": 6331,
      "Kanton": "ZG",
      "Gemeinden": "H�nenberg"
    },
    {
      "PLZ": 6332,
      "Kanton": "ZG",
      "Gemeinden": "Cham"
    },
    {
      "PLZ": 6333,
      "Kanton": "ZG",
      "Gemeinden": "H�nenberg"
    },
    {
      "PLZ": 6340,
      "Kanton": "ZG",
      "Gemeinden": "Baar, Neuheim"
    },
    {
      "PLZ": 6343,
      "Kanton": "ZG",
      "Gemeinden": "Risch"
    },
    {
      "PLZ": 6344,
      "Kanton": "LU",
      "Gemeinden": "Meierskappel"
    },
    {
      "PLZ": 6345,
      "Kanton": "ZG",
      "Gemeinden": "Neuheim"
    },
    {
      "PLZ": 6353,
      "Kanton": "LU",
      "Gemeinden": "Weggis"
    },
    {
      "PLZ": 6354,
      "Kanton": "LU",
      "Gemeinden": "Vitznau"
    },
    {
      "PLZ": 6356,
      "Kanton": "LU",
      "Gemeinden": "Weggis"
    },
    {
      "PLZ": 6362,
      "Kanton": "NW",
      "Gemeinden": "Stansstad"
    },
    {
      "PLZ": 6363,
      "Kanton": "NW",
      "Gemeinden": "Ennetb�rgen, Stansstad"
    },
    {
      "PLZ": 6365,
      "Kanton": "NW",
      "Gemeinden": "Stansstad"
    },
    {
      "PLZ": 6370,
      "Kanton": "NW",
      "Gemeinden": "Oberdorf (NW), Stans"
    },
    {
      "PLZ": 6372,
      "Kanton": "NW",
      "Gemeinden": "Ennetmoos"
    },
    {
      "PLZ": 6373,
      "Kanton": "NW",
      "Gemeinden": "Ennetb�rgen"
    },
    {
      "PLZ": 6374,
      "Kanton": "NW",
      "Gemeinden": "Buochs"
    },
    {
      "PLZ": 6375,
      "Kanton": "NW",
      "Gemeinden": "Beckenried"
    },
    {
      "PLZ": 6376,
      "Kanton": "NW",
      "Gemeinden": "Emmetten"
    },
    {
      "PLZ": 6377,
      "Kanton": "UR",
      "Gemeinden": "Seelisberg"
    },
    {
      "PLZ": 6382,
      "Kanton": "NW",
      "Gemeinden": "Oberdorf (NW)"
    },
    {
      "PLZ": 6383,
      "Kanton": "NW",
      "Gemeinden": "Dallenwil, Oberdorf (NW)"
    },
    {
      "PLZ": 6386,
      "Kanton": "NW",
      "Gemeinden": "Wolfenschiessen"
    },
    {
      "PLZ": 6387,
      "Kanton": "NW",
      "Gemeinden": "Wolfenschiessen"
    },
    {
      "PLZ": 6388,
      "Kanton": "OW",
      "Gemeinden": "Engelberg"
    },
    {
      "PLZ": 6390,
      "Kanton": "OW",
      "Gemeinden": "Engelberg"
    },
    {
      "PLZ": 6402,
      "Kanton": "SZ",
      "Gemeinden": "K�ssnacht (SZ)"
    },
    {
      "PLZ": 6403,
      "Kanton": "SZ",
      "Gemeinden": "K�ssnacht (SZ)"
    },
    {
      "PLZ": 6404,
      "Kanton": "LU",
      "Gemeinden": "Greppen"
    },
    {
      "PLZ": 6405,
      "Kanton": "SZ",
      "Gemeinden": "K�ssnacht (SZ)"
    },
    {
      "PLZ": 6410,
      "Kanton": "SZ",
      "Gemeinden": "Arth, Gersau"
    },
    {
      "PLZ": 6414,
      "Kanton": "SZ",
      "Gemeinden": "Arth"
    },
    {
      "PLZ": 6415,
      "Kanton": "SZ",
      "Gemeinden": "Arth"
    },
    {
      "PLZ": 6416,
      "Kanton": "SZ",
      "Gemeinden": "Steinerberg"
    },
    {
      "PLZ": 6417,
      "Kanton": "SZ",
      "Gemeinden": "Sattel"
    },
    {
      "PLZ": 6418,
      "Kanton": "SZ",
      "Gemeinden": "Rothenthurm"
    },
    {
      "PLZ": 6422,
      "Kanton": "SZ",
      "Gemeinden": "Steinen"
    },
    {
      "PLZ": 6423,
      "Kanton": "SZ",
      "Gemeinden": "SZ"
    },
    {
      "PLZ": 6424,
      "Kanton": "SZ",
      "Gemeinden": "Lauerz"
    },
    {
      "PLZ": 6430,
      "Kanton": "SZ",
      "Gemeinden": "SZ"
    },
    {
      "PLZ": 6432,
      "Kanton": "SZ",
      "Gemeinden": "SZ"
    },
    {
      "PLZ": 6433,
      "Kanton": "SZ",
      "Gemeinden": "Morschach"
    },
    {
      "PLZ": 6434,
      "Kanton": "SZ",
      "Gemeinden": "Illgau"
    },
    {
      "PLZ": 6436,
      "Kanton": "SZ",
      "Gemeinden": "Muotathal"
    },
    {
      "PLZ": 6438,
      "Kanton": "SZ",
      "Gemeinden": "SZ"
    },
    {
      "PLZ": 6440,
      "Kanton": "SZ",
      "Gemeinden": "Ingenbohl"
    },
    {
      "PLZ": 6441,
      "Kanton": "UR",
      "Gemeinden": "Seelisberg"
    },
    {
      "PLZ": 6442,
      "Kanton": "SZ",
      "Gemeinden": "Gersau"
    },
    {
      "PLZ": 6443,
      "Kanton": "SZ",
      "Gemeinden": "Morschach"
    },
    {
      "PLZ": 6452,
      "Kanton": "SZ",
      "Gemeinden": "Riemenstalden, Sisikon"
    },
    {
      "PLZ": 6454,
      "Kanton": "UR",
      "Gemeinden": "Fl�elen"
    },
    {
      "PLZ": 6460,
      "Kanton": "UR",
      "Gemeinden": "Altdorf (UR)"
    },
    {
      "PLZ": 6461,
      "Kanton": "UR",
      "Gemeinden": "Isenthal"
    },
    {
      "PLZ": 6462,
      "Kanton": "UR",
      "Gemeinden": "Seedorf (UR)"
    },
    {
      "PLZ": 6463,
      "Kanton": "UR",
      "Gemeinden": "B�rglen (UR)"
    },
    {
      "PLZ": 6464,
      "Kanton": "UR",
      "Gemeinden": "Spiringen"
    },
    {
      "PLZ": 6465,
      "Kanton": "UR",
      "Gemeinden": "Untersch�chen"
    },
    {
      "PLZ": 6466,
      "Kanton": "UR",
      "Gemeinden": "Bauen"
    },
    {
      "PLZ": 6467,
      "Kanton": "UR",
      "Gemeinden": "Schattdorf"
    },
    {
      "PLZ": 6468,
      "Kanton": "UR",
      "Gemeinden": "Attinghausen"
    },
    {
      "PLZ": 6469,
      "Kanton": "UR",
      "Gemeinden": "Schattdorf"
    },
    {
      "PLZ": 6472,
      "Kanton": "UR",
      "Gemeinden": "Erstfeld"
    },
    {
      "PLZ": 6473,
      "Kanton": "UR",
      "Gemeinden": "Silenen"
    },
    {
      "PLZ": 6474,
      "Kanton": "UR",
      "Gemeinden": "Silenen"
    },
    {
      "PLZ": 6475,
      "Kanton": "UR",
      "Gemeinden": "Silenen"
    },
    {
      "PLZ": 6476,
      "Kanton": "UR",
      "Gemeinden": "Gurtnellen"
    },
    {
      "PLZ": 6482,
      "Kanton": "UR",
      "Gemeinden": "Gurtnellen"
    },
    {
      "PLZ": 6484,
      "Kanton": "UR",
      "Gemeinden": "Wassen"
    },
    {
      "PLZ": 6485,
      "Kanton": "UR",
      "Gemeinden": "Wassen"
    },
    {
      "PLZ": 6487,
      "Kanton": "UR",
      "Gemeinden": "G�schenen"
    },
    {
      "PLZ": 6490,
      "Kanton": "UR",
      "Gemeinden": "Andermatt"
    },
    {
      "PLZ": 6491,
      "Kanton": "UR",
      "Gemeinden": "Realp"
    },
    {
      "PLZ": 6493,
      "Kanton": "UR",
      "Gemeinden": "Hospental"
    },
    {
      "PLZ": 6500,
      "Kanton": "TI",
      "Gemeinden": "Bellinzona"
    },
    {
      "PLZ": 6503,
      "Kanton": "TI",
      "Gemeinden": "Bellinzona"
    },
    {
      "PLZ": 6512,
      "Kanton": "TI",
      "Gemeinden": "Giubiasco"
    },
    {
      "PLZ": 6513,
      "Kanton": "TI",
      "Gemeinden": "Monte Carasso"
    },
    {
      "PLZ": 6514,
      "Kanton": "TI",
      "Gemeinden": "Sementina"
    },
    {
      "PLZ": 6515,
      "Kanton": "TI",
      "Gemeinden": "Gudo"
    },
    {
      "PLZ": 6516,
      "Kanton": "TI",
      "Gemeinden": "Cugnasco-Gerra"
    },
    {
      "PLZ": 6517,
      "Kanton": "TI",
      "Gemeinden": "Arbedo-Castione"
    },
    {
      "PLZ": 6518,
      "Kanton": "TI",
      "Gemeinden": "Gorduno"
    },
    {
      "PLZ": 6523,
      "Kanton": "TI",
      "Gemeinden": "Preonzo"
    },
    {
      "PLZ": 6524,
      "Kanton": "TI",
      "Gemeinden": "Moleno"
    },
    {
      "PLZ": 6525,
      "Kanton": "TI",
      "Gemeinden": "Gnosca"
    },
    {
      "PLZ": 6526,
      "Kanton": "TI",
      "Gemeinden": "Lodrino"
    },
    {
      "PLZ": 6527,
      "Kanton": "TI",
      "Gemeinden": "Lodrino"
    },
    {
      "PLZ": 6528,
      "Kanton": "TI",
      "Gemeinden": "Camorino"
    },
    {
      "PLZ": 6532,
      "Kanton": "TI",
      "Gemeinden": "Arbedo-Castione"
    },
    {
      "PLZ": 6533,
      "Kanton": "TI",
      "Gemeinden": "Lumino"
    },
    {
      "PLZ": 6534,
      "Kanton": "GR",
      "Gemeinden": "San Vittore"
    },
    {
      "PLZ": 6535,
      "Kanton": "GR",
      "Gemeinden": "Roveredo (GR)"
    },
    {
      "PLZ": 6537,
      "Kanton": "GR",
      "Gemeinden": "Grono"
    },
    {
      "PLZ": 6538,
      "Kanton": "GR",
      "Gemeinden": "Verdabbio"
    },
    {
      "PLZ": 6540,
      "Kanton": "GR",
      "Gemeinden": "Castaneda"
    },
    {
      "PLZ": 6541,
      "Kanton": "GR",
      "Gemeinden": "Santa Maria in Calanca"
    },
    {
      "PLZ": 6542,
      "Kanton": "GR",
      "Gemeinden": "Buseno"
    },
    {
      "PLZ": 6543,
      "Kanton": "GR",
      "Gemeinden": "Calanca"
    },
    {
      "PLZ": 6544,
      "Kanton": "GR",
      "Gemeinden": "Calanca"
    },
    {
      "PLZ": 6545,
      "Kanton": "GR",
      "Gemeinden": "Calanca"
    },
    {
      "PLZ": 6546,
      "Kanton": "GR",
      "Gemeinden": "Calanca"
    },
    {
      "PLZ": 6547,
      "Kanton": "GR",
      "Gemeinden": "Rossa"
    },
    {
      "PLZ": 6548,
      "Kanton": "GR",
      "Gemeinden": "Rossa"
    },
    {
      "PLZ": 6549,
      "Kanton": "GR",
      "Gemeinden": "Roveredo (GR)"
    },
    {
      "PLZ": 6556,
      "Kanton": "GR",
      "Gemeinden": "Leggia"
    },
    {
      "PLZ": 6557,
      "Kanton": "GR",
      "Gemeinden": "Cama"
    },
    {
      "PLZ": 6558,
      "Kanton": "GR",
      "Gemeinden": "Lostallo"
    },
    {
      "PLZ": 6562,
      "Kanton": "GR",
      "Gemeinden": "Soazza"
    },
    {
      "PLZ": 6563,
      "Kanton": "GR",
      "Gemeinden": "Mesocco"
    },
    {
      "PLZ": 6565,
      "Kanton": "GR",
      "Gemeinden": "Mesocco"
    },
    {
      "PLZ": 6571,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6572,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6573,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6574,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6575,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6576,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6577,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6578,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6579,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6582,
      "Kanton": "TI",
      "Gemeinden": "Pianezzo"
    },
    {
      "PLZ": 6583,
      "Kanton": "TI",
      "Gemeinden": "Sant'Antonio"
    },
    {
      "PLZ": 6584,
      "Kanton": "TI",
      "Gemeinden": "Sant'Antonio"
    },
    {
      "PLZ": 6592,
      "Kanton": "TI",
      "Gemeinden": "Sant'Antonino"
    },
    {
      "PLZ": 6593,
      "Kanton": "TI",
      "Gemeinden": "Cadenazzo"
    },
    {
      "PLZ": 6594,
      "Kanton": "TI",
      "Gemeinden": "Gambarogno"
    },
    {
      "PLZ": 6595,
      "Kanton": "TI",
      "Gemeinden": "Lavertezzo"
    },
    {
      "PLZ": 6596,
      "Kanton": "TI",
      "Gemeinden": "Gordola"
    },
    {
      "PLZ": 6597,
      "Kanton": "TI",
      "Gemeinden": "Cugnasco-Gerra"
    },
    {
      "PLZ": 6598,
      "Kanton": "TI",
      "Gemeinden": "Tenero-Contra"
    },
    {
      "PLZ": 6599,
      "Kanton": "TI",
      "Gemeinden": "Cadenazzo"
    },
    {
      "PLZ": 6600,
      "Kanton": "TI",
      "Gemeinden": "Locarno, Muralto"
    },
    {
      "PLZ": 6605,
      "Kanton": "TI",
      "Gemeinden": "Locarno"
    },
    {
      "PLZ": 6611,
      "Kanton": "TI",
      "Gemeinden": "Onsernone"
    },
    {
      "PLZ": 6612,
      "Kanton": "TI",
      "Gemeinden": "Ascona"
    },
    {
      "PLZ": 6613,
      "Kanton": "TI",
      "Gemeinden": "Ronco sopra Ascona"
    },
    {
      "PLZ": 6614,
      "Kanton": "TI",
      "Gemeinden": "Brissago"
    },
    {
      "PLZ": 6616,
      "Kanton": "TI",
      "Gemeinden": "Losone"
    },
    {
      "PLZ": 6618,
      "Kanton": "TI",
      "Gemeinden": "Losone"
    },
    {
      "PLZ": 6622,
      "Kanton": "TI",
      "Gemeinden": "Ronco sopra Ascona"
    },
    {
      "PLZ": 6631,
      "Kanton": "TI",
      "Gemeinden": "Corippo"
    },
    {
      "PLZ": 6632,
      "Kanton": "TI",
      "Gemeinden": "Vogorno"
    },
    {
      "PLZ": 6633,
      "Kanton": "TI",
      "Gemeinden": "Lavertezzo"
    },
    {
      "PLZ": 6634,
      "Kanton": "TI",
      "Gemeinden": "Brione (Verzasca)"
    },
    {
      "PLZ": 6635,
      "Kanton": "TI",
      "Gemeinden": "Cugnasco-Gerra"
    },
    {
      "PLZ": 6636,
      "Kanton": "TI",
      "Gemeinden": "Frasco"
    },
    {
      "PLZ": 6637,
      "Kanton": "TI",
      "Gemeinden": "Sonogno"
    },
    {
      "PLZ": 6644,
      "Kanton": "TI",
      "Gemeinden": "Orselina"
    },
    {
      "PLZ": 6645,
      "Kanton": "TI",
      "Gemeinden": "Brione sopra Minusio"
    },
    {
      "PLZ": 6646,
      "Kanton": "TI",
      "Gemeinden": "Tenero-Contra"
    },
    {
      "PLZ": 6647,
      "Kanton": "TI",
      "Gemeinden": "Mergoscia"
    },
    {
      "PLZ": 6648,
      "Kanton": "TI",
      "Gemeinden": "Minusio"
    },
    {
      "PLZ": 6652,
      "Kanton": "TI",
      "Gemeinden": "Terre di Pedemonte"
    },
    {
      "PLZ": 6653,
      "Kanton": "TI",
      "Gemeinden": "Terre di Pedemonte"
    },
    {
      "PLZ": 6654,
      "Kanton": "TI",
      "Gemeinden": "Terre di Pedemonte"
    },
    {
      "PLZ": 6655,
      "Kanton": "TI",
      "Gemeinden": "Centovalli"
    },
    {
      "PLZ": 6656,
      "Kanton": "TI",
      "Gemeinden": "Centovalli"
    },
    {
      "PLZ": 6657,
      "Kanton": "TI",
      "Gemeinden": "Centovalli"
    },
    {
      "PLZ": 6658,
      "Kanton": "TI",
      "Gemeinden": "Centovalli"
    },
    {
      "PLZ": 6659,
      "Kanton": "TI",
      "Gemeinden": "Centovalli"
    },
    {
      "PLZ": 6661,
      "Kanton": "TI",
      "Gemeinden": "Onsernone"
    },
    {
      "PLZ": 6662,
      "Kanton": "TI",
      "Gemeinden": "Onsernone"
    },
    {
      "PLZ": 6663,
      "Kanton": "TI",
      "Gemeinden": "Onsernone"
    },
    {
      "PLZ": 6664,
      "Kanton": "TI",
      "Gemeinden": "Onsernone"
    },
    {
      "PLZ": 6670,
      "Kanton": "TI",
      "Gemeinden": "Avegno Gordevio"
    },
    {
      "PLZ": 6672,
      "Kanton": "TI",
      "Gemeinden": "Avegno Gordevio"
    },
    {
      "PLZ": 6673,
      "Kanton": "TI",
      "Gemeinden": "Maggia"
    },
    {
      "PLZ": 6674,
      "Kanton": "TI",
      "Gemeinden": "Maggia"
    },
    {
      "PLZ": 6675,
      "Kanton": "TI",
      "Gemeinden": "Cevio"
    },
    {
      "PLZ": 6676,
      "Kanton": "TI",
      "Gemeinden": "Cevio"
    },
    {
      "PLZ": 6677,
      "Kanton": "TI",
      "Gemeinden": "Maggia"
    },
    {
      "PLZ": 6678,
      "Kanton": "TI",
      "Gemeinden": "Maggia"
    },
    {
      "PLZ": 6682,
      "Kanton": "TI",
      "Gemeinden": "Linescio"
    },
    {
      "PLZ": 6683,
      "Kanton": "TI",
      "Gemeinden": "Cerentino, Campo (Vallemaggia)"
    },
    {
      "PLZ": 6684,
      "Kanton": "TI",
      "Gemeinden": "Campo (Vallemaggia)"
    },
    {
      "PLZ": 6685,
      "Kanton": "TI",
      "Gemeinden": "Bosco/GURn"
    },
    {
      "PLZ": 6690,
      "Kanton": "TI",
      "Gemeinden": "Cevio"
    },
    {
      "PLZ": 6692,
      "Kanton": "TI",
      "Gemeinden": "Lavizzara"
    },
    {
      "PLZ": 6693,
      "Kanton": "TI",
      "Gemeinden": "Lavizzara"
    },
    {
      "PLZ": 6694,
      "Kanton": "TI",
      "Gemeinden": "Lavizzara"
    },
    {
      "PLZ": 6695,
      "Kanton": "TI",
      "Gemeinden": "Lavizzara"
    },
    {
      "PLZ": 6696,
      "Kanton": "TI",
      "Gemeinden": "Lavizzara"
    },
    {
      "PLZ": 6702,
      "Kanton": "TI",
      "Gemeinden": "Claro"
    },
    {
      "PLZ": 6703,
      "Kanton": "TI",
      "Gemeinden": "Osogna"
    },
    {
      "PLZ": 6705,
      "Kanton": "TI",
      "Gemeinden": "Cresciano"
    },
    {
      "PLZ": 6707,
      "Kanton": "TI",
      "Gemeinden": "Iragna"
    },
    {
      "PLZ": 6710,
      "Kanton": "TI",
      "Gemeinden": "Biasca"
    },
    {
      "PLZ": 6713,
      "Kanton": "TI",
      "Gemeinden": "Serravalle"
    },
    {
      "PLZ": 6714,
      "Kanton": "TI",
      "Gemeinden": "Serravalle"
    },
    {
      "PLZ": 6715,
      "Kanton": "TI",
      "Gemeinden": "Acquarossa"
    },
    {
      "PLZ": 6716,
      "Kanton": "TI",
      "Gemeinden": "Acquarossa"
    },
    {
      "PLZ": 6717,
      "Kanton": "TI",
      "Gemeinden": "Blenio"
    },
    {
      "PLZ": 6718,
      "Kanton": "TI",
      "Gemeinden": "Blenio"
    },
    {
      "PLZ": 6719,
      "Kanton": "TI",
      "Gemeinden": "Blenio"
    },
    {
      "PLZ": 6720,
      "Kanton": "TI",
      "Gemeinden": "Blenio"
    },
    {
      "PLZ": 6721,
      "Kanton": "TI",
      "Gemeinden": "Serravalle, Acquarossa"
    },
    {
      "PLZ": 6722,
      "Kanton": "TI",
      "Gemeinden": "Acquarossa"
    },
    {
      "PLZ": 6723,
      "Kanton": "TI",
      "Gemeinden": "Acquarossa"
    },
    {
      "PLZ": 6724,
      "Kanton": "TI",
      "Gemeinden": "Acquarossa"
    },
    {
      "PLZ": 6742,
      "Kanton": "TI",
      "Gemeinden": "Pollegio"
    },
    {
      "PLZ": 6743,
      "Kanton": "TI",
      "Gemeinden": "Bodio"
    },
    {
      "PLZ": 6744,
      "Kanton": "TI",
      "Gemeinden": "Personico"
    },
    {
      "PLZ": 6745,
      "Kanton": "TI",
      "Gemeinden": "Giornico"
    },
    {
      "PLZ": 6746,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6747,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6748,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6749,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6760,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6763,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6764,
      "Kanton": "TI",
      "Gemeinden": "Faido"
    },
    {
      "PLZ": 6772,
      "Kanton": "TI",
      "Gemeinden": "Prato (Leventina)"
    },
    {
      "PLZ": 6773,
      "Kanton": "TI",
      "Gemeinden": "Prato (Leventina)"
    },
    {
      "PLZ": 6774,
      "Kanton": "TI",
      "Gemeinden": "Dalpe"
    },
    {
      "PLZ": 6775,
      "Kanton": "TI",
      "Gemeinden": "Quinto"
    },
    {
      "PLZ": 6776,
      "Kanton": "TI",
      "Gemeinden": "Quinto"
    },
    {
      "PLZ": 6777,
      "Kanton": "TI",
      "Gemeinden": "Quinto"
    },
    {
      "PLZ": 6780,
      "Kanton": "TI",
      "Gemeinden": "Airolo"
    },
    {
      "PLZ": 6781,
      "Kanton": "TI",
      "Gemeinden": "Bedretto"
    },
    {
      "PLZ": 6802,
      "Kanton": "TI",
      "Gemeinden": "Monteceneri"
    },
    {
      "PLZ": 6803,
      "Kanton": "TI",
      "Gemeinden": "Monteceneri"
    },
    {
      "PLZ": 6804,
      "Kanton": "TI",
      "Gemeinden": "Monteceneri"
    },
    {
      "PLZ": 6805,
      "Kanton": "TI",
      "Gemeinden": "Mezzovico-Vira"
    },
    {
      "PLZ": 6806,
      "Kanton": "TI",
      "Gemeinden": "Monteceneri"
    },
    {
      "PLZ": 6807,
      "Kanton": "TI",
      "Gemeinden": "Capriasca, Torricella-Taverne"
    },
    {
      "PLZ": 6808,
      "Kanton": "TI",
      "Gemeinden": "Torricella-Taverne"
    },
    {
      "PLZ": 6809,
      "Kanton": "TI",
      "Gemeinden": "Comunanza Cadenazzo/Montecener, Monteceneri"
    },
    {
      "PLZ": 6810,
      "Kanton": "TI",
      "Gemeinden": "Isone"
    },
    {
      "PLZ": 6814,
      "Kanton": "TI",
      "Gemeinden": "Cadempino, Lamone"
    },
    {
      "PLZ": 6815,
      "Kanton": "TI",
      "Gemeinden": "Melide"
    },
    {
      "PLZ": 6816,
      "Kanton": "TI",
      "Gemeinden": "Bissone"
    },
    {
      "PLZ": 6817,
      "Kanton": "TI",
      "Gemeinden": "Maroggia"
    },
    {
      "PLZ": 6818,
      "Kanton": "TI",
      "Gemeinden": "Melano"
    },
    {
      "PLZ": 6821,
      "Kanton": "TI",
      "Gemeinden": "Rovio"
    },
    {
      "PLZ": 6822,
      "Kanton": "TI",
      "Gemeinden": "Arogno"
    },
    {
      "PLZ": 6823,
      "Kanton": "TI",
      "Gemeinden": "Arogno"
    },
    {
      "PLZ": 6825,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio, Rovio"
    },
    {
      "PLZ": 6826,
      "Kanton": "TI",
      "Gemeinden": "Riva San Vitale"
    },
    {
      "PLZ": 6827,
      "Kanton": "TI",
      "Gemeinden": "Brusino Arsizio"
    },
    {
      "PLZ": 6828,
      "Kanton": "TI",
      "Gemeinden": "Balerna"
    },
    {
      "PLZ": 6830,
      "Kanton": "TI",
      "Gemeinden": "Chiasso"
    },
    {
      "PLZ": 6832,
      "Kanton": "TI",
      "Gemeinden": "Chiasso"
    },
    {
      "PLZ": 6833,
      "Kanton": "TI",
      "Gemeinden": "Vacallo"
    },
    {
      "PLZ": 6834,
      "Kanton": "TI",
      "Gemeinden": "Morbio Inferiore"
    },
    {
      "PLZ": 6835,
      "Kanton": "TI",
      "Gemeinden": "Breggia"
    },
    {
      "PLZ": 6837,
      "Kanton": "TI",
      "Gemeinden": "Breggia"
    },
    {
      "PLZ": 6838,
      "Kanton": "TI",
      "Gemeinden": "Breggia"
    },
    {
      "PLZ": 6839,
      "Kanton": "TI",
      "Gemeinden": "Breggia"
    },
    {
      "PLZ": 6850,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6852,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6853,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6854,
      "Kanton": "TI",
      "Gemeinden": "Stabio"
    },
    {
      "PLZ": 6855,
      "Kanton": "TI",
      "Gemeinden": "Stabio"
    },
    {
      "PLZ": 6862,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6863,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6864,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6865,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6866,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6867,
      "Kanton": "TI",
      "Gemeinden": "Brusino Arsizio"
    },
    {
      "PLZ": 6872,
      "Kanton": "TI",
      "Gemeinden": "Mendrisio"
    },
    {
      "PLZ": 6873,
      "Kanton": "TI",
      "Gemeinden": "Castel San Pietro"
    },
    {
      "PLZ": 6874,
      "Kanton": "TI",
      "Gemeinden": "Castel San Pietro"
    },
    {
      "PLZ": 6875,
      "Kanton": "TI",
      "Gemeinden": "Castel San Pietro"
    },
    {
      "PLZ": 6877,
      "Kanton": "TI",
      "Gemeinden": "Coldrerio"
    },
    {
      "PLZ": 6883,
      "Kanton": "TI",
      "Gemeinden": "Novazzano"
    },
    {
      "PLZ": 6900,
      "Kanton": "TI",
      "Gemeinden": "Lugano, Massagno, Paradiso"
    },
    {
      "PLZ": 6912,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6913,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6914,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6915,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6916,
      "Kanton": "TI",
      "Gemeinden": "Grancia"
    },
    {
      "PLZ": 6917,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6918,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6919,
      "Kanton": "TI",
      "Gemeinden": "Collina d'Oro"
    },
    {
      "PLZ": 6921,
      "Kanton": "TI",
      "Gemeinden": "Vico Morcote"
    },
    {
      "PLZ": 6922,
      "Kanton": "TI",
      "Gemeinden": "Morcote"
    },
    {
      "PLZ": 6924,
      "Kanton": "TI",
      "Gemeinden": "Sorengo"
    },
    {
      "PLZ": 6925,
      "Kanton": "TI",
      "Gemeinden": "Collina d'Oro"
    },
    {
      "PLZ": 6926,
      "Kanton": "TI",
      "Gemeinden": "Collina d'Oro"
    },
    {
      "PLZ": 6927,
      "Kanton": "TI",
      "Gemeinden": "Collina d'Oro"
    },
    {
      "PLZ": 6928,
      "Kanton": "TI",
      "Gemeinden": "Manno"
    },
    {
      "PLZ": 6929,
      "Kanton": "TI",
      "Gemeinden": "Gravesano"
    },
    {
      "PLZ": 6930,
      "Kanton": "TI",
      "Gemeinden": "Bedano"
    },
    {
      "PLZ": 6932,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6933,
      "Kanton": "TI",
      "Gemeinden": "Muzzano"
    },
    {
      "PLZ": 6934,
      "Kanton": "TI",
      "Gemeinden": "Bioggio"
    },
    {
      "PLZ": 6935,
      "Kanton": "TI",
      "Gemeinden": "Bioggio"
    },
    {
      "PLZ": 6936,
      "Kanton": "TI",
      "Gemeinden": "Cademario"
    },
    {
      "PLZ": 6937,
      "Kanton": "TI",
      "Gemeinden": "Alto Malcantone"
    },
    {
      "PLZ": 6938,
      "Kanton": "TI",
      "Gemeinden": "Alto Malcantone"
    },
    {
      "PLZ": 6939,
      "Kanton": "TI",
      "Gemeinden": "Alto Malcantone"
    },
    {
      "PLZ": 6942,
      "Kanton": "TI",
      "Gemeinden": "Savosa"
    },
    {
      "PLZ": 6943,
      "Kanton": "TI",
      "Gemeinden": "Vezia"
    },
    {
      "PLZ": 6944,
      "Kanton": "TI",
      "Gemeinden": "Cureglia"
    },
    {
      "PLZ": 6945,
      "Kanton": "TI",
      "Gemeinden": "Origlio"
    },
    {
      "PLZ": 6946,
      "Kanton": "TI",
      "Gemeinden": "Ponte Capriasca"
    },
    {
      "PLZ": 6947,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6948,
      "Kanton": "TI",
      "Gemeinden": "Porza"
    },
    {
      "PLZ": 6949,
      "Kanton": "TI",
      "Gemeinden": "Comano"
    },
    {
      "PLZ": 6950,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6951,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6952,
      "Kanton": "TI",
      "Gemeinden": "Canobbio"
    },
    {
      "PLZ": 6953,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6954,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6955,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6956,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6957,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6958,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6959,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6960,
      "Kanton": "TI",
      "Gemeinden": "Capriasca"
    },
    {
      "PLZ": 6962,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6963,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6964,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6965,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6966,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6967,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6968,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6974,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6976,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6977,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6978,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6979,
      "Kanton": "TI",
      "Gemeinden": "Lugano"
    },
    {
      "PLZ": 6980,
      "Kanton": "TI",
      "Gemeinden": "Croglio"
    },
    {
      "PLZ": 6981,
      "Kanton": "TI",
      "Gemeinden": "Bedigliora, Croglio, CURo"
    },
    {
      "PLZ": 6982,
      "Kanton": "TI",
      "Gemeinden": "Agno"
    },
    {
      "PLZ": 6983,
      "Kanton": "TI",
      "Gemeinden": "Magliaso"
    },
    {
      "PLZ": 6984,
      "Kanton": "TI",
      "Gemeinden": "Pura"
    },
    {
      "PLZ": 6986,
      "Kanton": "TI",
      "Gemeinden": "CURo, Miglieglia, Novaggio"
    },
    {
      "PLZ": 6987,
      "Kanton": "TI",
      "Gemeinden": "Caslano"
    },
    {
      "PLZ": 6988,
      "Kanton": "TI",
      "Gemeinden": "Ponte Tresa"
    },
    {
      "PLZ": 6989,
      "Kanton": "TI",
      "Gemeinden": "Croglio"
    },
    {
      "PLZ": 6990,
      "Kanton": "TI",
      "Gemeinden": "Agno"
    },
    {
      "PLZ": 6991,
      "Kanton": "TI",
      "Gemeinden": "Neggio"
    },
    {
      "PLZ": 6992,
      "Kanton": "TI",
      "Gemeinden": "Bioggio, Vernate"
    },
    {
      "PLZ": 6993,
      "Kanton": "TI",
      "Gemeinden": "Bioggio"
    },
    {
      "PLZ": 6994,
      "Kanton": "TI",
      "Gemeinden": "Aranno"
    },
    {
      "PLZ": 6995,
      "Kanton": "TI",
      "Gemeinden": "Croglio, Monteggio"
    },
    {
      "PLZ": 6996,
      "Kanton": "TI",
      "Gemeinden": "Monteggio"
    },
    {
      "PLZ": 6997,
      "Kanton": "TI",
      "Gemeinden": "Sessa"
    },
    {
      "PLZ": 6998,
      "Kanton": "TI",
      "Gemeinden": "Monteggio"
    },
    {
      "PLZ": 6999,
      "Kanton": "TI",
      "Gemeinden": "Astano"
    },
    {
      "PLZ": 7000,
      "Kanton": "GR",
      "Gemeinden": "Chur"
    },
    {
      "PLZ": 7012,
      "Kanton": "GR",
      "Gemeinden": "Felsberg"
    },
    {
      "PLZ": 7013,
      "Kanton": "GR",
      "Gemeinden": "Domat/Ems"
    },
    {
      "PLZ": 7014,
      "Kanton": "GR",
      "Gemeinden": "Trin"
    },
    {
      "PLZ": 7015,
      "Kanton": "GR",
      "Gemeinden": "Tamins"
    },
    {
      "PLZ": 7016,
      "Kanton": "GR",
      "Gemeinden": "Trin"
    },
    {
      "PLZ": 7017,
      "Kanton": "GR",
      "Gemeinden": "Flims"
    },
    {
      "PLZ": 7018,
      "Kanton": "GR",
      "Gemeinden": "Flims"
    },
    {
      "PLZ": 7019,
      "Kanton": "GR",
      "Gemeinden": "Flims"
    },
    {
      "PLZ": 7023,
      "Kanton": "GR",
      "Gemeinden": "Haldenstein"
    },
    {
      "PLZ": 7026,
      "Kanton": "GR",
      "Gemeinden": "Maladers"
    },
    {
      "PLZ": 7027,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7028,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7029,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7031,
      "Kanton": "GR",
      "Gemeinden": "Laax"
    },
    {
      "PLZ": 7032,
      "Kanton": "GR",
      "Gemeinden": "Laax"
    },
    {
      "PLZ": 7050,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7056,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7057,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7058,
      "Kanton": "GR",
      "Gemeinden": "Arosa"
    },
    {
      "PLZ": 7062,
      "Kanton": "GR",
      "Gemeinden": "Churwalden"
    },
    {
      "PLZ": 7063,
      "Kanton": "GR",
      "Gemeinden": "Tschiertschen-Praden"
    },
    {
      "PLZ": 7064,
      "Kanton": "GR",
      "Gemeinden": "Tschiertschen-Praden"
    },
    {
      "PLZ": 7074,
      "Kanton": "GR",
      "Gemeinden": "Churwalden"
    },
    {
      "PLZ": 7075,
      "Kanton": "GR",
      "Gemeinden": "Churwalden"
    },
    {
      "PLZ": 7076,
      "Kanton": "GR",
      "Gemeinden": "Churwalden"
    },
    {
      "PLZ": 7077,
      "Kanton": "GR",
      "Gemeinden": "Vaz/Obervaz"
    },
    {
      "PLZ": 7078,
      "Kanton": "GR",
      "Gemeinden": "Vaz/Obervaz"
    },
    {
      "PLZ": 7082,
      "Kanton": "GR",
      "Gemeinden": "Vaz/Obervaz"
    },
    {
      "PLZ": 7083,
      "Kanton": "GR",
      "Gemeinden": "Lantsch/Lenz"
    },
    {
      "PLZ": 7084,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7104,
      "Kanton": "GR",
      "Gemeinden": "Safiental"
    },
    {
      "PLZ": 7106,
      "Kanton": "GR",
      "Gemeinden": "Safiental"
    },
    {
      "PLZ": 7107,
      "Kanton": "GR",
      "Gemeinden": "Safiental"
    },
    {
      "PLZ": 7109,
      "Kanton": "GR",
      "Gemeinden": "Safiental"
    },
    {
      "PLZ": 7110,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7111,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7112,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7113,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7114,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7115,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7116,
      "Kanton": "GR",
      "Gemeinden": "Vals, Lumnezia"
    },
    {
      "PLZ": 7122,
      "Kanton": "GR",
      "Gemeinden": "Safiental"
    },
    {
      "PLZ": 7126,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7127,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7128,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7130,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7132,
      "Kanton": "GR",
      "Gemeinden": "Vals"
    },
    {
      "PLZ": 7134,
      "Kanton": "GR",
      "Gemeinden": "Obersaxen-Mundaun"
    },
    {
      "PLZ": 7137,
      "Kanton": "GR",
      "Gemeinden": "Obersaxen-Mundaun"
    },
    {
      "PLZ": 7138,
      "Kanton": "GR",
      "Gemeinden": "Obersaxen-Mundaun"
    },
    {
      "PLZ": 7141,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7142,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7143,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7144,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7145,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7146,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7147,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7148,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7149,
      "Kanton": "GR",
      "Gemeinden": "Lumnezia"
    },
    {
      "PLZ": 7151,
      "Kanton": "GR",
      "Gemeinden": "Schluein"
    },
    {
      "PLZ": 7152,
      "Kanton": "GR",
      "Gemeinden": "Sagogn"
    },
    {
      "PLZ": 7153,
      "Kanton": "GR",
      "Gemeinden": "Falera"
    },
    {
      "PLZ": 7154,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7155,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7156,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7157,
      "Kanton": "GR",
      "Gemeinden": "Ilanz/Glion"
    },
    {
      "PLZ": 7158,
      "Kanton": "GR",
      "Gemeinden": "Waltensburg/Vuorz"
    },
    {
      "PLZ": 7159,
      "Kanton": "GR",
      "Gemeinden": "Andiast"
    },
    {
      "PLZ": 7162,
      "Kanton": "GR",
      "Gemeinden": "Breil/Brigels"
    },
    {
      "PLZ": 7163,
      "Kanton": "GR",
      "Gemeinden": "Breil/Brigels"
    },
    {
      "PLZ": 7164,
      "Kanton": "GR",
      "Gemeinden": "Breil/Brigels"
    },
    {
      "PLZ": 7165,
      "Kanton": "GR",
      "Gemeinden": "Breil/Brigels"
    },
    {
      "PLZ": 7166,
      "Kanton": "GR",
      "Gemeinden": "Trun"
    },
    {
      "PLZ": 7167,
      "Kanton": "GR",
      "Gemeinden": "Trun"
    },
    {
      "PLZ": 7168,
      "Kanton": "GR",
      "Gemeinden": "Trun"
    },
    {
      "PLZ": 7172,
      "Kanton": "GR",
      "Gemeinden": "Sumvitg"
    },
    {
      "PLZ": 7173,
      "Kanton": "GR",
      "Gemeinden": "Sumvitg"
    },
    {
      "PLZ": 7174,
      "Kanton": "GR",
      "Gemeinden": "Sumvitg"
    },
    {
      "PLZ": 7175,
      "Kanton": "GR",
      "Gemeinden": "Sumvitg"
    },
    {
      "PLZ": 7176,
      "Kanton": "GR",
      "Gemeinden": "Sumvitg"
    },
    {
      "PLZ": 7180,
      "Kanton": "GR",
      "Gemeinden": "Disentis/Must�r"
    },
    {
      "PLZ": 7182,
      "Kanton": "GR",
      "Gemeinden": "Disentis/Must�r"
    },
    {
      "PLZ": 7183,
      "Kanton": "GR",
      "Gemeinden": "Disentis/Must�r"
    },
    {
      "PLZ": 7184,
      "Kanton": "GR",
      "Gemeinden": "Medel (Lucmagn)"
    },
    {
      "PLZ": 7185,
      "Kanton": "GR",
      "Gemeinden": "Medel (Lucmagn)"
    },
    {
      "PLZ": 7186,
      "Kanton": "GR",
      "Gemeinden": "Disentis/Must�r"
    },
    {
      "PLZ": 7187,
      "Kanton": "GR",
      "Gemeinden": "Tujetsch"
    },
    {
      "PLZ": 7188,
      "Kanton": "GR",
      "Gemeinden": "Tujetsch"
    },
    {
      "PLZ": 7189,
      "Kanton": "GR",
      "Gemeinden": "Tujetsch"
    },
    {
      "PLZ": 7202,
      "Kanton": "GR",
      "Gemeinden": "Trimmis"
    },
    {
      "PLZ": 7203,
      "Kanton": "GR",
      "Gemeinden": "Trimmis"
    },
    {
      "PLZ": 7204,
      "Kanton": "GR",
      "Gemeinden": "Untervaz"
    },
    {
      "PLZ": 7205,
      "Kanton": "GR",
      "Gemeinden": "Zizers"
    },
    {
      "PLZ": 7206,
      "Kanton": "GR",
      "Gemeinden": "Landquart"
    },
    {
      "PLZ": 7208,
      "Kanton": "GR",
      "Gemeinden": "Malans"
    },
    {
      "PLZ": 7212,
      "Kanton": "GR",
      "Gemeinden": "Seewis im Pr�ttigau"
    },
    {
      "PLZ": 7213,
      "Kanton": "GR",
      "Gemeinden": "Gr�sch"
    },
    {
      "PLZ": 7214,
      "Kanton": "GR",
      "Gemeinden": "Gr�sch"
    },
    {
      "PLZ": 7215,
      "Kanton": "GR",
      "Gemeinden": "Gr�sch"
    },
    {
      "PLZ": 7220,
      "Kanton": "GR",
      "Gemeinden": "Schiers"
    },
    {
      "PLZ": 7222,
      "Kanton": "GR",
      "Gemeinden": "Schiers"
    },
    {
      "PLZ": 7223,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7224,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7226,
      "Kanton": "GR",
      "Gemeinden": "Schiers"
    },
    {
      "PLZ": 7228,
      "Kanton": "GR",
      "Gemeinden": "Schiers"
    },
    {
      "PLZ": 7231,
      "Kanton": "GR",
      "Gemeinden": "Jenaz"
    },
    {
      "PLZ": 7232,
      "Kanton": "GR",
      "Gemeinden": "Furna"
    },
    {
      "PLZ": 7233,
      "Kanton": "GR",
      "Gemeinden": "Jenaz"
    },
    {
      "PLZ": 7235,
      "Kanton": "GR",
      "Gemeinden": "Fideris"
    },
    {
      "PLZ": 7240,
      "Kanton": "GR",
      "Gemeinden": "K�blis"
    },
    {
      "PLZ": 7241,
      "Kanton": "GR",
      "Gemeinden": "Conters im Pr�ttigau"
    },
    {
      "PLZ": 7242,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7243,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7244,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7245,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7246,
      "Kanton": "GR",
      "Gemeinden": "Luzein"
    },
    {
      "PLZ": 7247,
      "Kanton": "GR",
      "Gemeinden": "Klosters-Serneus"
    },
    {
      "PLZ": 7249,
      "Kanton": "GR",
      "Gemeinden": "Klosters-Serneus"
    },
    {
      "PLZ": 7250,
      "Kanton": "GR",
      "Gemeinden": "Klosters-Serneus"
    },
    {
      "PLZ": 7252,
      "Kanton": "GR",
      "Gemeinden": "Klosters-Serneus"
    },
    {
      "PLZ": 7260,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7265,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7270,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7272,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7276,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7277,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7278,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7302,
      "Kanton": "GR",
      "Gemeinden": "Landquart"
    },
    {
      "PLZ": 7303,
      "Kanton": "GR",
      "Gemeinden": "Landquart"
    },
    {
      "PLZ": 7304,
      "Kanton": "GR",
      "Gemeinden": "Maienfeld"
    },
    {
      "PLZ": 7306,
      "Kanton": "GR",
      "Gemeinden": "Fl�sch"
    },
    {
      "PLZ": 7307,
      "Kanton": "GR",
      "Gemeinden": "Jenins"
    },
    {
      "PLZ": 7310,
      "Kanton": "SG",
      "Gemeinden": "Bad Ragaz, Pf�fers"
    },
    {
      "PLZ": 7312,
      "Kanton": "SG",
      "Gemeinden": "Pf�fers"
    },
    {
      "PLZ": 7313,
      "Kanton": "SG",
      "Gemeinden": "Pf�fers"
    },
    {
      "PLZ": 7314,
      "Kanton": "SG",
      "Gemeinden": "Pf�fers"
    },
    {
      "PLZ": 7315,
      "Kanton": "SG",
      "Gemeinden": "Pf�fers"
    },
    {
      "PLZ": 7317,
      "Kanton": "SG",
      "Gemeinden": "Pf�fers"
    },
    {
      "PLZ": 7320,
      "Kanton": "SG",
      "Gemeinden": "Sargans"
    },
    {
      "PLZ": 7323,
      "Kanton": "SG",
      "Gemeinden": "Vilters-Wangs"
    },
    {
      "PLZ": 7324,
      "Kanton": "SG",
      "Gemeinden": "Vilters-Wangs"
    },
    {
      "PLZ": 7325,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 7326,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 7402,
      "Kanton": "GR",
      "Gemeinden": "Bonaduz"
    },
    {
      "PLZ": 7403,
      "Kanton": "GR",
      "Gemeinden": "Rh�z�ns"
    },
    {
      "PLZ": 7404,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7405,
      "Kanton": "GR",
      "Gemeinden": "Rothenbrunnen"
    },
    {
      "PLZ": 7407,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7408,
      "Kanton": "GR",
      "Gemeinden": "Cazis"
    },
    {
      "PLZ": 7411,
      "Kanton": "GR",
      "Gemeinden": "Sils im Domleschg"
    },
    {
      "PLZ": 7412,
      "Kanton": "GR",
      "Gemeinden": "Scharans"
    },
    {
      "PLZ": 7413,
      "Kanton": "GR",
      "Gemeinden": "F�rstenau"
    },
    {
      "PLZ": 7414,
      "Kanton": "GR",
      "Gemeinden": "F�rstenau"
    },
    {
      "PLZ": 7415,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7416,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7417,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7418,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7419,
      "Kanton": "GR",
      "Gemeinden": "Domleschg"
    },
    {
      "PLZ": 7421,
      "Kanton": "GR",
      "Gemeinden": "Cazis"
    },
    {
      "PLZ": 7422,
      "Kanton": "GR",
      "Gemeinden": "Cazis"
    },
    {
      "PLZ": 7423,
      "Kanton": "GR",
      "Gemeinden": "Cazis"
    },
    {
      "PLZ": 7424,
      "Kanton": "GR",
      "Gemeinden": "Cazis"
    },
    {
      "PLZ": 7425,
      "Kanton": "GR",
      "Gemeinden": "Masein"
    },
    {
      "PLZ": 7426,
      "Kanton": "GR",
      "Gemeinden": "Flerden"
    },
    {
      "PLZ": 7427,
      "Kanton": "GR",
      "Gemeinden": "Urmein"
    },
    {
      "PLZ": 7428,
      "Kanton": "GR",
      "Gemeinden": "Tschappina"
    },
    {
      "PLZ": 7430,
      "Kanton": "GR",
      "Gemeinden": "Rongellen, Thusis"
    },
    {
      "PLZ": 7431,
      "Kanton": "GR",
      "Gemeinden": "Mutten"
    },
    {
      "PLZ": 7432,
      "Kanton": "GR",
      "Gemeinden": "Zillis-Reischen"
    },
    {
      "PLZ": 7433,
      "Kanton": "GR",
      "Gemeinden": "Donat, Lohn (GR), Mathon, Casti-Wergenstein"
    },
    {
      "PLZ": 7434,
      "Kanton": "GR",
      "Gemeinden": "Sufers"
    },
    {
      "PLZ": 7435,
      "Kanton": "GR",
      "Gemeinden": "Spl�gen"
    },
    {
      "PLZ": 7436,
      "Kanton": "GR",
      "Gemeinden": "Spl�gen"
    },
    {
      "PLZ": 7437,
      "Kanton": "GR",
      "Gemeinden": "Nufenen"
    },
    {
      "PLZ": 7438,
      "Kanton": "GR",
      "Gemeinden": "Hinterrhein"
    },
    {
      "PLZ": 7440,
      "Kanton": "GR",
      "Gemeinden": "Andeer"
    },
    {
      "PLZ": 7442,
      "Kanton": "GR",
      "Gemeinden": "Andeer"
    },
    {
      "PLZ": 7443,
      "Kanton": "GR",
      "Gemeinden": "Andeer"
    },
    {
      "PLZ": 7444,
      "Kanton": "GR",
      "Gemeinden": "Ferrera"
    },
    {
      "PLZ": 7445,
      "Kanton": "GR",
      "Gemeinden": "Ferrera"
    },
    {
      "PLZ": 7446,
      "Kanton": "GR",
      "Gemeinden": "Avers"
    },
    {
      "PLZ": 7447,
      "Kanton": "GR",
      "Gemeinden": "Avers"
    },
    {
      "PLZ": 7448,
      "Kanton": "GR",
      "Gemeinden": "Avers"
    },
    {
      "PLZ": 7450,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7451,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7452,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7453,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7454,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7455,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7456,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7457,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7458,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7459,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7460,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7462,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7463,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7464,
      "Kanton": "GR",
      "Gemeinden": "Surses"
    },
    {
      "PLZ": 7472,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7473,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7477,
      "Kanton": "GR",
      "Gemeinden": "Filisur"
    },
    {
      "PLZ": 7482,
      "Kanton": "GR",
      "Gemeinden": "Berg�n/Bravuogn"
    },
    {
      "PLZ": 7484,
      "Kanton": "GR",
      "Gemeinden": "Berg�n/Bravuogn"
    },
    {
      "PLZ": 7492,
      "Kanton": "GR",
      "Gemeinden": "Albula/Alvra"
    },
    {
      "PLZ": 7493,
      "Kanton": "GR",
      "Gemeinden": "Schmitten (GR)"
    },
    {
      "PLZ": 7494,
      "Kanton": "GR",
      "Gemeinden": "Davos"
    },
    {
      "PLZ": 7500,
      "Kanton": "GR",
      "Gemeinden": "St. Moritz"
    },
    {
      "PLZ": 7502,
      "Kanton": "GR",
      "Gemeinden": "Bever"
    },
    {
      "PLZ": 7503,
      "Kanton": "GR",
      "Gemeinden": "Samedan"
    },
    {
      "PLZ": 7504,
      "Kanton": "GR",
      "Gemeinden": "Pontresina"
    },
    {
      "PLZ": 7505,
      "Kanton": "GR",
      "Gemeinden": "Celerina/Schlarigna"
    },
    {
      "PLZ": 7512,
      "Kanton": "GR",
      "Gemeinden": "Silvaplana"
    },
    {
      "PLZ": 7513,
      "Kanton": "GR",
      "Gemeinden": "Silvaplana"
    },
    {
      "PLZ": 7514,
      "Kanton": "GR",
      "Gemeinden": "Sils im Engadin/Segl"
    },
    {
      "PLZ": 7515,
      "Kanton": "GR",
      "Gemeinden": "Sils im Engadin/Segl"
    },
    {
      "PLZ": 7516,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7517,
      "Kanton": "GR",
      "Gemeinden": "Sils im Engadin/Segl"
    },
    {
      "PLZ": 7522,
      "Kanton": "GR",
      "Gemeinden": "La Punt-Chamues-ch"
    },
    {
      "PLZ": 7523,
      "Kanton": "GR",
      "Gemeinden": "Madulain"
    },
    {
      "PLZ": 7524,
      "Kanton": "GR",
      "Gemeinden": "Zuoz"
    },
    {
      "PLZ": 7525,
      "Kanton": "GR",
      "Gemeinden": "S-chanf"
    },
    {
      "PLZ": 7526,
      "Kanton": "GR",
      "Gemeinden": "S-chanf"
    },
    {
      "PLZ": 7527,
      "Kanton": "GR",
      "Gemeinden": "Zernez"
    },
    {
      "PLZ": 7530,
      "Kanton": "GR",
      "Gemeinden": "Zernez"
    },
    {
      "PLZ": 7532,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7533,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7534,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7535,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7536,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7537,
      "Kanton": "GR",
      "Gemeinden": "Val M�stair"
    },
    {
      "PLZ": 7542,
      "Kanton": "GR",
      "Gemeinden": "Zernez"
    },
    {
      "PLZ": 7543,
      "Kanton": "GR",
      "Gemeinden": "Zernez"
    },
    {
      "PLZ": 7545,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7546,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7550,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7551,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7552,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7553,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7554,
      "Kanton": "GR",
      "Gemeinden": "Scuol"
    },
    {
      "PLZ": 7556,
      "Kanton": "GR",
      "Gemeinden": "Valsot"
    },
    {
      "PLZ": 7557,
      "Kanton": "GR",
      "Gemeinden": "Valsot"
    },
    {
      "PLZ": 7558,
      "Kanton": "GR",
      "Gemeinden": "Valsot"
    },
    {
      "PLZ": 7559,
      "Kanton": "GR",
      "Gemeinden": "Valsot"
    },
    {
      "PLZ": 7560,
      "Kanton": "GR",
      "Gemeinden": "Valsot"
    },
    {
      "PLZ": 7562,
      "Kanton": "GR",
      "Gemeinden": "Samnaun"
    },
    {
      "PLZ": 7563,
      "Kanton": "GR",
      "Gemeinden": "Samnaun"
    },
    {
      "PLZ": 7602,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7603,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7604,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7605,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7606,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7608,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7610,
      "Kanton": "GR",
      "Gemeinden": "Bregaglia"
    },
    {
      "PLZ": 7710,
      "Kanton": "GR",
      "Gemeinden": "Poschiavo"
    },
    {
      "PLZ": 7741,
      "Kanton": "GR",
      "Gemeinden": "Poschiavo"
    },
    {
      "PLZ": 7742,
      "Kanton": "GR",
      "Gemeinden": "Poschiavo"
    },
    {
      "PLZ": 7743,
      "Kanton": "GR",
      "Gemeinden": "Brusio, Poschiavo"
    },
    {
      "PLZ": 7744,
      "Kanton": "GR",
      "Gemeinden": "Brusio"
    },
    {
      "PLZ": 7745,
      "Kanton": "GR",
      "Gemeinden": "Poschiavo"
    },
    {
      "PLZ": 7746,
      "Kanton": "GR",
      "Gemeinden": "Poschiavo"
    },
    {
      "PLZ": 7747,
      "Kanton": "GR",
      "Gemeinden": "Brusio"
    },
    {
      "PLZ": 7748,
      "Kanton": "GR",
      "Gemeinden": "Brusio"
    },
    {
      "PLZ": 8001,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8002,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8003,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8004,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8005,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8006,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8008,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8032,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8037,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8038,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8041,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8044,
      "Kanton": "ZH",
      "Gemeinden": "D�bendorf, ZH"
    },
    {
      "PLZ": 8045,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8046,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8047,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8048,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8049,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8050,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8051,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8052,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8053,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8055,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8057,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8064,
      "Kanton": "ZH",
      "Gemeinden": "ZH"
    },
    {
      "PLZ": 8102,
      "Kanton": "ZH",
      "Gemeinden": "Oberengstringen"
    },
    {
      "PLZ": 8103,
      "Kanton": "ZH",
      "Gemeinden": "Unterengstringen"
    },
    {
      "PLZ": 8104,
      "Kanton": "ZH",
      "Gemeinden": "Weiningen (ZH)"
    },
    {
      "PLZ": 8105,
      "Kanton": "ZH",
      "Gemeinden": "Regensdorf"
    },
    {
      "PLZ": 8106,
      "Kanton": "ZH",
      "Gemeinden": "Regensdorf"
    },
    {
      "PLZ": 8107,
      "Kanton": "ZH",
      "Gemeinden": "Buchs (ZH)"
    },
    {
      "PLZ": 8108,
      "Kanton": "ZH",
      "Gemeinden": "D�llikon"
    },
    {
      "PLZ": 8109,
      "Kanton": "AG",
      "Gemeinden": "W�renlos"
    },
    {
      "PLZ": 8112,
      "Kanton": "ZH",
      "Gemeinden": "Otelfingen"
    },
    {
      "PLZ": 8113,
      "Kanton": "ZH",
      "Gemeinden": "Boppelsen"
    },
    {
      "PLZ": 8114,
      "Kanton": "ZH",
      "Gemeinden": "D�nikon"
    },
    {
      "PLZ": 8115,
      "Kanton": "ZH",
      "Gemeinden": "H�ttikon"
    },
    {
      "PLZ": 8117,
      "Kanton": "ZH",
      "Gemeinden": "F�llanden"
    },
    {
      "PLZ": 8118,
      "Kanton": "ZH",
      "Gemeinden": "F�llanden"
    },
    {
      "PLZ": 8121,
      "Kanton": "ZH",
      "Gemeinden": "F�llanden"
    },
    {
      "PLZ": 8122,
      "Kanton": "ZH",
      "Gemeinden": "Maur"
    },
    {
      "PLZ": 8123,
      "Kanton": "ZH",
      "Gemeinden": "Maur"
    },
    {
      "PLZ": 8124,
      "Kanton": "ZH",
      "Gemeinden": "Maur"
    },
    {
      "PLZ": 8125,
      "Kanton": "ZH",
      "Gemeinden": "Zollikon"
    },
    {
      "PLZ": 8126,
      "Kanton": "ZH",
      "Gemeinden": "Zumikon"
    },
    {
      "PLZ": 8127,
      "Kanton": "ZH",
      "Gemeinden": "K�snacht (ZH)"
    },
    {
      "PLZ": 8132,
      "Kanton": "ZH",
      "Gemeinden": "Egg"
    },
    {
      "PLZ": 8133,
      "Kanton": "ZH",
      "Gemeinden": "Egg"
    },
    {
      "PLZ": 8134,
      "Kanton": "ZH",
      "Gemeinden": "Adliswil"
    },
    {
      "PLZ": 8135,
      "Kanton": "ZH",
      "Gemeinden": "Langnau am Albis, Horgen"
    },
    {
      "PLZ": 8136,
      "Kanton": "ZH",
      "Gemeinden": "Thalwil"
    },
    {
      "PLZ": 8142,
      "Kanton": "ZH",
      "Gemeinden": "Uitikon"
    },
    {
      "PLZ": 8143,
      "Kanton": "ZH",
      "Gemeinden": "Stallikon"
    },
    {
      "PLZ": 8152,
      "Kanton": "ZH",
      "Gemeinden": "Opfikon"
    },
    {
      "PLZ": 8153,
      "Kanton": "ZH",
      "Gemeinden": "R�mlang"
    },
    {
      "PLZ": 8154,
      "Kanton": "ZH",
      "Gemeinden": "Oberglatt"
    },
    {
      "PLZ": 8155,
      "Kanton": "ZH",
      "Gemeinden": "Niederhasli"
    },
    {
      "PLZ": 8156,
      "Kanton": "ZH",
      "Gemeinden": "Niederhasli"
    },
    {
      "PLZ": 8157,
      "Kanton": "ZH",
      "Gemeinden": "Dielsdorf"
    },
    {
      "PLZ": 8158,
      "Kanton": "ZH",
      "Gemeinden": "Regensberg"
    },
    {
      "PLZ": 8162,
      "Kanton": "ZH",
      "Gemeinden": "Steinmaur"
    },
    {
      "PLZ": 8164,
      "Kanton": "ZH",
      "Gemeinden": "Bachs"
    },
    {
      "PLZ": 8165,
      "Kanton": "ZH",
      "Gemeinden": "Oberweningen, Schleinikon, Sch�fflisdorf"
    },
    {
      "PLZ": 8166,
      "Kanton": "ZH",
      "Gemeinden": "Niederweningen"
    },
    {
      "PLZ": 8172,
      "Kanton": "ZH",
      "Gemeinden": "Niederglatt"
    },
    {
      "PLZ": 8173,
      "Kanton": "ZH",
      "Gemeinden": "Neerach"
    },
    {
      "PLZ": 8174,
      "Kanton": "ZH",
      "Gemeinden": "Stadel"
    },
    {
      "PLZ": 8175,
      "Kanton": "ZH",
      "Gemeinden": "Stadel"
    },
    {
      "PLZ": 8180,
      "Kanton": "ZH",
      "Gemeinden": "B�lach"
    },
    {
      "PLZ": 8181,
      "Kanton": "ZH",
      "Gemeinden": "H�ri"
    },
    {
      "PLZ": 8182,
      "Kanton": "ZH",
      "Gemeinden": "Hochfelden"
    },
    {
      "PLZ": 8184,
      "Kanton": "ZH",
      "Gemeinden": "Bachenb�lach"
    },
    {
      "PLZ": 8185,
      "Kanton": "ZH",
      "Gemeinden": "Winkel"
    },
    {
      "PLZ": 8187,
      "Kanton": "ZH",
      "Gemeinden": "Weiach"
    },
    {
      "PLZ": 8192,
      "Kanton": "ZH",
      "Gemeinden": "Glattfelden"
    },
    {
      "PLZ": 8193,
      "Kanton": "ZH",
      "Gemeinden": "Eglisau"
    },
    {
      "PLZ": 8194,
      "Kanton": "ZH",
      "Gemeinden": "H�ntwangen"
    },
    {
      "PLZ": 8195,
      "Kanton": "ZH",
      "Gemeinden": "Wasterkingen"
    },
    {
      "PLZ": 8196,
      "Kanton": "ZH",
      "Gemeinden": "Wil (ZH)"
    },
    {
      "PLZ": 8197,
      "Kanton": "ZH",
      "Gemeinden": "Rafz"
    },
    {
      "PLZ": 8200,
      "Kanton": "SH",
      "Gemeinden": "SH"
    },
    {
      "PLZ": 8203,
      "Kanton": "SH",
      "Gemeinden": "SH"
    },
    {
      "PLZ": 8207,
      "Kanton": "SH",
      "Gemeinden": "SH"
    },
    {
      "PLZ": 8208,
      "Kanton": "SH",
      "Gemeinden": "SH"
    },
    {
      "PLZ": 8212,
      "Kanton": "SH",
      "Gemeinden": "Neuhausen am Rheinfall, Laufen-Uhwiesen"
    },
    {
      "PLZ": 8213,
      "Kanton": "SH",
      "Gemeinden": "Neunkirch"
    },
    {
      "PLZ": 8214,
      "Kanton": "SH",
      "Gemeinden": "G�chlingen"
    },
    {
      "PLZ": 8215,
      "Kanton": "SH",
      "Gemeinden": "Hallau"
    },
    {
      "PLZ": 8216,
      "Kanton": "SH",
      "Gemeinden": "Oberhallau"
    },
    {
      "PLZ": 8217,
      "Kanton": "SH",
      "Gemeinden": "Wilchingen"
    },
    {
      "PLZ": 8218,
      "Kanton": "SH",
      "Gemeinden": "Wilchingen"
    },
    {
      "PLZ": 8219,
      "Kanton": "SH",
      "Gemeinden": "Trasadingen"
    },
    {
      "PLZ": 8222,
      "Kanton": "SH",
      "Gemeinden": "Beringen"
    },
    {
      "PLZ": 8223,
      "Kanton": "SH",
      "Gemeinden": "Beringen"
    },
    {
      "PLZ": 8224,
      "Kanton": "SH",
      "Gemeinden": "L�hningen"
    },
    {
      "PLZ": 8225,
      "Kanton": "SH",
      "Gemeinden": "Siblingen"
    },
    {
      "PLZ": 8226,
      "Kanton": "SH",
      "Gemeinden": "Schleitheim"
    },
    {
      "PLZ": 8228,
      "Kanton": "SH",
      "Gemeinden": "Beggingen"
    },
    {
      "PLZ": 8231,
      "Kanton": "SH",
      "Gemeinden": "SH"
    },
    {
      "PLZ": 8232,
      "Kanton": "SH",
      "Gemeinden": "Merishausen"
    },
    {
      "PLZ": 8233,
      "Kanton": "SH",
      "Gemeinden": "Bargen (SH)"
    },
    {
      "PLZ": 8234,
      "Kanton": "SH",
      "Gemeinden": "Stetten (SH)"
    },
    {
      "PLZ": 8235,
      "Kanton": "SH",
      "Gemeinden": "Lohn (SH)"
    },
    {
      "PLZ": 8236,
      "Kanton": "SH",
      "Gemeinden": "B�ttenhardt, Thayngen"
    },
    {
      "PLZ": 8239,
      "Kanton": "SH",
      "Gemeinden": "D�rflingen"
    },
    {
      "PLZ": 8240,
      "Kanton": "SH",
      "Gemeinden": "Thayngen"
    },
    {
      "PLZ": 8241,
      "Kanton": "SH",
      "Gemeinden": "Thayngen"
    },
    {
      "PLZ": 8242,
      "Kanton": "SH",
      "Gemeinden": "Thayngen"
    },
    {
      "PLZ": 8243,
      "Kanton": "SH",
      "Gemeinden": "Thayngen"
    },
    {
      "PLZ": 8245,
      "Kanton": "ZH",
      "Gemeinden": "Feuerthalen"
    },
    {
      "PLZ": 8246,
      "Kanton": "ZH",
      "Gemeinden": "Feuerthalen"
    },
    {
      "PLZ": 8247,
      "Kanton": "ZH",
      "Gemeinden": "Flurlingen"
    },
    {
      "PLZ": 8248,
      "Kanton": "ZH",
      "Gemeinden": "Laufen-Uhwiesen"
    },
    {
      "PLZ": 8252,
      "Kanton": "TG",
      "Gemeinden": "Schlatt (TG)"
    },
    {
      "PLZ": 8253,
      "Kanton": "TG",
      "Gemeinden": "Diessenhofen"
    },
    {
      "PLZ": 8254,
      "Kanton": "TG",
      "Gemeinden": "Basadingen-Schlattingen"
    },
    {
      "PLZ": 8255,
      "Kanton": "TG",
      "Gemeinden": "Basadingen-Schlattingen"
    },
    {
      "PLZ": 8259,
      "Kanton": "TG",
      "Gemeinden": "Wagenhausen"
    },
    {
      "PLZ": 8260,
      "Kanton": "SH",
      "Gemeinden": "Stein am Rhein"
    },
    {
      "PLZ": 8261,
      "Kanton": "SH",
      "Gemeinden": "Hemishofen"
    },
    {
      "PLZ": 8262,
      "Kanton": "SH",
      "Gemeinden": "Ramsen"
    },
    {
      "PLZ": 8263,
      "Kanton": "SH",
      "Gemeinden": "Buch (SH)"
    },
    {
      "PLZ": 8264,
      "Kanton": "TG",
      "Gemeinden": "Eschenz"
    },
    {
      "PLZ": 8265,
      "Kanton": "TG",
      "Gemeinden": "Mammern"
    },
    {
      "PLZ": 8266,
      "Kanton": "TG",
      "Gemeinden": "Steckborn"
    },
    {
      "PLZ": 8267,
      "Kanton": "TG",
      "Gemeinden": "Berlingen"
    },
    {
      "PLZ": 8268,
      "Kanton": "TG",
      "Gemeinden": "Salenstein"
    },
    {
      "PLZ": 8269,
      "Kanton": "TG",
      "Gemeinden": "Salenstein"
    },
    {
      "PLZ": 8272,
      "Kanton": "TG",
      "Gemeinden": "Ermatingen"
    },
    {
      "PLZ": 8273,
      "Kanton": "TG",
      "Gemeinden": "Ermatingen"
    },
    {
      "PLZ": 8274,
      "Kanton": "TG",
      "Gemeinden": "Gottlieben, T�gerwilen"
    },
    {
      "PLZ": 8280,
      "Kanton": "TG",
      "Gemeinden": "Kreuzlingen"
    },
    {
      "PLZ": 8302,
      "Kanton": "ZH",
      "Gemeinden": "Kloten"
    },
    {
      "PLZ": 8303,
      "Kanton": "ZH",
      "Gemeinden": "Bassersdorf"
    },
    {
      "PLZ": 8304,
      "Kanton": "ZH",
      "Gemeinden": "VSellen"
    },
    {
      "PLZ": 8305,
      "Kanton": "ZH",
      "Gemeinden": "Dietlikon"
    },
    {
      "PLZ": 8306,
      "Kanton": "ZH",
      "Gemeinden": "Wangen-Br�ttisellen"
    },
    {
      "PLZ": 8307,
      "Kanton": "ZH",
      "Gemeinden": "Illnau-Effretikon"
    },
    {
      "PLZ": 8308,
      "Kanton": "ZH",
      "Gemeinden": "Illnau-Effretikon"
    },
    {
      "PLZ": 8309,
      "Kanton": "ZH",
      "Gemeinden": "N�rensdorf"
    },
    {
      "PLZ": 8310,
      "Kanton": "ZH",
      "Gemeinden": "Lindau"
    },
    {
      "PLZ": 8311,
      "Kanton": "ZH",
      "Gemeinden": "Br�tten"
    },
    {
      "PLZ": 8312,
      "Kanton": "ZH",
      "Gemeinden": "Lindau"
    },
    {
      "PLZ": 8314,
      "Kanton": "ZH",
      "Gemeinden": "Illnau-Effretikon"
    },
    {
      "PLZ": 8315,
      "Kanton": "ZH",
      "Gemeinden": "Lindau"
    },
    {
      "PLZ": 8317,
      "Kanton": "ZH",
      "Gemeinden": "Lindau"
    },
    {
      "PLZ": 8320,
      "Kanton": "ZH",
      "Gemeinden": "Fehraltorf"
    },
    {
      "PLZ": 8322,
      "Kanton": "ZH",
      "Gemeinden": "Russikon"
    },
    {
      "PLZ": 8330,
      "Kanton": "ZH",
      "Gemeinden": "Pf�ffikon"
    },
    {
      "PLZ": 8331,
      "Kanton": "ZH",
      "Gemeinden": "Pf�ffikon"
    },
    {
      "PLZ": 8332,
      "Kanton": "ZH",
      "Gemeinden": "Russikon"
    },
    {
      "PLZ": 8335,
      "Kanton": "ZH",
      "Gemeinden": "Hittnau"
    },
    {
      "PLZ": 8340,
      "Kanton": "ZH",
      "Gemeinden": "Hinwil"
    },
    {
      "PLZ": 8342,
      "Kanton": "ZH",
      "Gemeinden": "Hinwil"
    },
    {
      "PLZ": 8344,
      "Kanton": "ZH",
      "Gemeinden": "B�retswil"
    },
    {
      "PLZ": 8345,
      "Kanton": "ZH",
      "Gemeinden": "B�retswil"
    },
    {
      "PLZ": 8352,
      "Kanton": "ZH",
      "Gemeinden": "Elsau, Winterthur"
    },
    {
      "PLZ": 8353,
      "Kanton": "ZH",
      "Gemeinden": "Elgg"
    },
    {
      "PLZ": 8354,
      "Kanton": "ZH",
      "Gemeinden": "Hofstetten (ZH)"
    },
    {
      "PLZ": 8355,
      "Kanton": "TG",
      "Gemeinden": "Aadorf"
    },
    {
      "PLZ": 8356,
      "Kanton": "TG",
      "Gemeinden": "Aadorf"
    },
    {
      "PLZ": 8357,
      "Kanton": "TG",
      "Gemeinden": "Aadorf"
    },
    {
      "PLZ": 8360,
      "Kanton": "TG",
      "Gemeinden": "Eschlikon"
    },
    {
      "PLZ": 8362,
      "Kanton": "TG",
      "Gemeinden": "Bichelsee-Balterswil"
    },
    {
      "PLZ": 8363,
      "Kanton": "TG",
      "Gemeinden": "Bichelsee-Balterswil"
    },
    {
      "PLZ": 8370,
      "Kanton": "TG",
      "Gemeinden": "Sirnach"
    },
    {
      "PLZ": 8371,
      "Kanton": "TG",
      "Gemeinden": "Sirnach"
    },
    {
      "PLZ": 8372,
      "Kanton": "TG",
      "Gemeinden": "Sirnach"
    },
    {
      "PLZ": 8374,
      "Kanton": "TG",
      "Gemeinden": "Fischingen"
    },
    {
      "PLZ": 8376,
      "Kanton": "TG",
      "Gemeinden": "Fischingen"
    },
    {
      "PLZ": 8400,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8404,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8405,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8406,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8408,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8409,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8412,
      "Kanton": "ZH",
      "Gemeinden": "Neftenbach"
    },
    {
      "PLZ": 8413,
      "Kanton": "ZH",
      "Gemeinden": "Neftenbach"
    },
    {
      "PLZ": 8414,
      "Kanton": "ZH",
      "Gemeinden": "Buch am Irchel"
    },
    {
      "PLZ": 8415,
      "Kanton": "ZH",
      "Gemeinden": "Berg am Irchel"
    },
    {
      "PLZ": 8416,
      "Kanton": "ZH",
      "Gemeinden": "Flaach"
    },
    {
      "PLZ": 8418,
      "Kanton": "ZH",
      "Gemeinden": "Schlatt (ZH)"
    },
    {
      "PLZ": 8421,
      "Kanton": "ZH",
      "Gemeinden": "D�ttlikon"
    },
    {
      "PLZ": 8422,
      "Kanton": "ZH",
      "Gemeinden": "Pfungen"
    },
    {
      "PLZ": 8424,
      "Kanton": "ZH",
      "Gemeinden": "Embrach"
    },
    {
      "PLZ": 8425,
      "Kanton": "ZH",
      "Gemeinden": "Oberembrach"
    },
    {
      "PLZ": 8426,
      "Kanton": "ZH",
      "Gemeinden": "Lufingen"
    },
    {
      "PLZ": 8427,
      "Kanton": "ZH",
      "Gemeinden": "Freienstein-Teufen, Rorbas"
    },
    {
      "PLZ": 8428,
      "Kanton": "ZH",
      "Gemeinden": "Freienstein-Teufen"
    },
    {
      "PLZ": 8442,
      "Kanton": "ZH",
      "Gemeinden": "Hettlingen"
    },
    {
      "PLZ": 8444,
      "Kanton": "ZH",
      "Gemeinden": "Henggart"
    },
    {
      "PLZ": 8447,
      "Kanton": "ZH",
      "Gemeinden": "Dachsen"
    },
    {
      "PLZ": 8450,
      "Kanton": "ZH",
      "Gemeinden": "Andelfingen"
    },
    {
      "PLZ": 8451,
      "Kanton": "ZH",
      "Gemeinden": "Kleinandelfingen"
    },
    {
      "PLZ": 8452,
      "Kanton": "ZH",
      "Gemeinden": "Adlikon"
    },
    {
      "PLZ": 8453,
      "Kanton": "ZH",
      "Gemeinden": "Kleinandelfingen"
    },
    {
      "PLZ": 8454,
      "Kanton": "SH",
      "Gemeinden": "Buchberg"
    },
    {
      "PLZ": 8455,
      "Kanton": "SH",
      "Gemeinden": "R�dlingen"
    },
    {
      "PLZ": 8457,
      "Kanton": "ZH",
      "Gemeinden": "Humlikon"
    },
    {
      "PLZ": 8458,
      "Kanton": "ZH",
      "Gemeinden": "Dorf"
    },
    {
      "PLZ": 8459,
      "Kanton": "ZH",
      "Gemeinden": "Volken"
    },
    {
      "PLZ": 8460,
      "Kanton": "ZH",
      "Gemeinden": "Marthalen"
    },
    {
      "PLZ": 8461,
      "Kanton": "ZH",
      "Gemeinden": "Kleinandelfingen"
    },
    {
      "PLZ": 8462,
      "Kanton": "ZH",
      "Gemeinden": "Rheinau"
    },
    {
      "PLZ": 8463,
      "Kanton": "ZH",
      "Gemeinden": "Benken (ZH)"
    },
    {
      "PLZ": 8464,
      "Kanton": "ZH",
      "Gemeinden": "Marthalen"
    },
    {
      "PLZ": 8465,
      "Kanton": "ZH",
      "Gemeinden": "Tr�llikon"
    },
    {
      "PLZ": 8466,
      "Kanton": "ZH",
      "Gemeinden": "Tr�llikon"
    },
    {
      "PLZ": 8467,
      "Kanton": "ZH",
      "Gemeinden": "Truttikon"
    },
    {
      "PLZ": 8468,
      "Kanton": "ZH",
      "Gemeinden": "Waltalingen"
    },
    {
      "PLZ": 8471,
      "Kanton": "ZH",
      "Gemeinden": "D�gerlen"
    },
    {
      "PLZ": 8472,
      "Kanton": "ZH",
      "Gemeinden": "Seuzach"
    },
    {
      "PLZ": 8474,
      "Kanton": "ZH",
      "Gemeinden": "Dinhard"
    },
    {
      "PLZ": 8475,
      "Kanton": "ZH",
      "Gemeinden": "Ossingen"
    },
    {
      "PLZ": 8476,
      "Kanton": "ZH",
      "Gemeinden": "Unterstammheim"
    },
    {
      "PLZ": 8477,
      "Kanton": "ZH",
      "Gemeinden": "Oberstammheim"
    },
    {
      "PLZ": 8478,
      "Kanton": "ZH",
      "Gemeinden": "Thalheim an der Thur"
    },
    {
      "PLZ": 8479,
      "Kanton": "ZH",
      "Gemeinden": "Altikon"
    },
    {
      "PLZ": 8482,
      "Kanton": "ZH",
      "Gemeinden": "Winterthur"
    },
    {
      "PLZ": 8483,
      "Kanton": "ZH",
      "Gemeinden": "Zell (ZH)"
    },
    {
      "PLZ": 8484,
      "Kanton": "ZH",
      "Gemeinden": "Weisslingen"
    },
    {
      "PLZ": 8486,
      "Kanton": "ZH",
      "Gemeinden": "Zell (ZH)"
    },
    {
      "PLZ": 8487,
      "Kanton": "ZH",
      "Gemeinden": "Zell (ZH)"
    },
    {
      "PLZ": 8488,
      "Kanton": "ZH",
      "Gemeinden": "Turbenthal"
    },
    {
      "PLZ": 8489,
      "Kanton": "ZH",
      "Gemeinden": "Wildberg"
    },
    {
      "PLZ": 8492,
      "Kanton": "ZH",
      "Gemeinden": "Wila"
    },
    {
      "PLZ": 8493,
      "Kanton": "ZH",
      "Gemeinden": "Bauma"
    },
    {
      "PLZ": 8494,
      "Kanton": "ZH",
      "Gemeinden": "Bauma"
    },
    {
      "PLZ": 8495,
      "Kanton": "ZH",
      "Gemeinden": "Turbenthal"
    },
    {
      "PLZ": 8496,
      "Kanton": "ZH",
      "Gemeinden": "Fischenthal"
    },
    {
      "PLZ": 8497,
      "Kanton": "ZH",
      "Gemeinden": "Fischenthal"
    },
    {
      "PLZ": 8498,
      "Kanton": "ZH",
      "Gemeinden": "Fischenthal"
    },
    {
      "PLZ": 8499,
      "Kanton": "ZH",
      "Gemeinden": "Bauma"
    },
    {
      "PLZ": 8500,
      "Kanton": "TG",
      "Gemeinden": "Frauenfeld"
    },
    {
      "PLZ": 8505,
      "Kanton": "TG",
      "Gemeinden": "Pfyn"
    },
    {
      "PLZ": 8506,
      "Kanton": "TG",
      "Gemeinden": "Herdern"
    },
    {
      "PLZ": 8507,
      "Kanton": "TG",
      "Gemeinden": "Homburg"
    },
    {
      "PLZ": 8508,
      "Kanton": "TG",
      "Gemeinden": "Homburg"
    },
    {
      "PLZ": 8512,
      "Kanton": "TG",
      "Gemeinden": "Thundorf"
    },
    {
      "PLZ": 8514,
      "Kanton": "TG",
      "Gemeinden": "Amlikon-Bissegg"
    },
    {
      "PLZ": 8522,
      "Kanton": "TG",
      "Gemeinden": "Aadorf"
    },
    {
      "PLZ": 8523,
      "Kanton": "ZH",
      "Gemeinden": "Hagenbuch"
    },
    {
      "PLZ": 8524,
      "Kanton": "TG",
      "Gemeinden": "Uesslingen-Buch"
    },
    {
      "PLZ": 8525,
      "Kanton": "TG",
      "Gemeinden": "Neunforn"
    },
    {
      "PLZ": 8526,
      "Kanton": "TG",
      "Gemeinden": "Neunforn"
    },
    {
      "PLZ": 8532,
      "Kanton": "TG",
      "Gemeinden": "Warth-Weiningen"
    },
    {
      "PLZ": 8535,
      "Kanton": "TG",
      "Gemeinden": "Herdern"
    },
    {
      "PLZ": 8536,
      "Kanton": "TG",
      "Gemeinden": "H�ttwilen"
    },
    {
      "PLZ": 8537,
      "Kanton": "TG",
      "Gemeinden": "H�ttwilen"
    },
    {
      "PLZ": 8542,
      "Kanton": "ZH",
      "Gemeinden": "Wiesendangen"
    },
    {
      "PLZ": 8543,
      "Kanton": "ZH",
      "Gemeinden": "Wiesendangen"
    },
    {
      "PLZ": 8544,
      "Kanton": "ZH",
      "Gemeinden": "Wiesendangen"
    },
    {
      "PLZ": 8545,
      "Kanton": "ZH",
      "Gemeinden": "Rickenbach (ZH)"
    },
    {
      "PLZ": 8546,
      "Kanton": "TG",
      "Gemeinden": "Gachnang, Wiesendangen"
    },
    {
      "PLZ": 8547,
      "Kanton": "TG",
      "Gemeinden": "Gachnang"
    },
    {
      "PLZ": 8548,
      "Kanton": "ZH",
      "Gemeinden": "Ellikon an der Thur"
    },
    {
      "PLZ": 8552,
      "Kanton": "TG",
      "Gemeinden": "Felben-Wellhausen"
    },
    {
      "PLZ": 8553,
      "Kanton": "TG",
      "Gemeinden": "H�ttlingen"
    },
    {
      "PLZ": 8554,
      "Kanton": "TG",
      "Gemeinden": "Wigoltingen"
    },
    {
      "PLZ": 8555,
      "Kanton": "TG",
      "Gemeinden": "M�llheim"
    },
    {
      "PLZ": 8556,
      "Kanton": "TG",
      "Gemeinden": "Wigoltingen"
    },
    {
      "PLZ": 8558,
      "Kanton": "TG",
      "Gemeinden": "Raperswilen"
    },
    {
      "PLZ": 8560,
      "Kanton": "TG",
      "Gemeinden": "M�rstetten"
    },
    {
      "PLZ": 8561,
      "Kanton": "TG",
      "Gemeinden": "M�rstetten"
    },
    {
      "PLZ": 8564,
      "Kanton": "TG",
      "Gemeinden": "W�ldi, Wigoltingen"
    },
    {
      "PLZ": 8565,
      "Kanton": "TG",
      "Gemeinden": "Kemmental"
    },
    {
      "PLZ": 8566,
      "Kanton": "TG",
      "Gemeinden": "Kemmental"
    },
    {
      "PLZ": 8570,
      "Kanton": "TG",
      "Gemeinden": "Weinfelden"
    },
    {
      "PLZ": 8572,
      "Kanton": "TG",
      "Gemeinden": "Berg (TG)"
    },
    {
      "PLZ": 8573,
      "Kanton": "TG",
      "Gemeinden": "Kemmental"
    },
    {
      "PLZ": 8574,
      "Kanton": "TG",
      "Gemeinden": "Lengwil"
    },
    {
      "PLZ": 8575,
      "Kanton": "TG",
      "Gemeinden": "B�rglen (TG)"
    },
    {
      "PLZ": 8576,
      "Kanton": "TG",
      "Gemeinden": "Berg (TG)"
    },
    {
      "PLZ": 8577,
      "Kanton": "TG",
      "Gemeinden": "Sch�nholzerswilen"
    },
    {
      "PLZ": 8580,
      "Kanton": "TG",
      "Gemeinden": "Amriswil, Hefenhofen, Sommeri"
    },
    {
      "PLZ": 8581,
      "Kanton": "TG",
      "Gemeinden": "Amriswil"
    },
    {
      "PLZ": 8582,
      "Kanton": "TG",
      "Gemeinden": "Dozwil"
    },
    {
      "PLZ": 8583,
      "Kanton": "TG",
      "Gemeinden": "Sulgen"
    },
    {
      "PLZ": 8584,
      "Kanton": "TG",
      "Gemeinden": "B�rglen (TG)"
    },
    {
      "PLZ": 8585,
      "Kanton": "TG",
      "Gemeinden": "Birwinken, Langrickenbach"
    },
    {
      "PLZ": 8586,
      "Kanton": "TG",
      "Gemeinden": "Birwinken, Erlen"
    },
    {
      "PLZ": 8587,
      "Kanton": "TG",
      "Gemeinden": "Amriswil"
    },
    {
      "PLZ": 8588,
      "Kanton": "TG",
      "Gemeinden": "Zihlschlacht-Sitterdorf"
    },
    {
      "PLZ": 8589,
      "Kanton": "TG",
      "Gemeinden": "Zihlschlacht-Sitterdorf"
    },
    {
      "PLZ": 8590,
      "Kanton": "TG",
      "Gemeinden": "Romanshorn"
    },
    {
      "PLZ": 8592,
      "Kanton": "TG",
      "Gemeinden": "Uttwil"
    },
    {
      "PLZ": 8593,
      "Kanton": "TG",
      "Gemeinden": "Kesswil"
    },
    {
      "PLZ": 8594,
      "Kanton": "TG",
      "Gemeinden": "G�ttingen"
    },
    {
      "PLZ": 8595,
      "Kanton": "TG",
      "Gemeinden": "Altnau"
    },
    {
      "PLZ": 8596,
      "Kanton": "TG",
      "Gemeinden": "M�nsterlingen"
    },
    {
      "PLZ": 8597,
      "Kanton": "TG",
      "Gemeinden": "M�nsterlingen"
    },
    {
      "PLZ": 8598,
      "Kanton": "TG",
      "Gemeinden": "Bottighofen"
    },
    {
      "PLZ": 8599,
      "Kanton": "TG",
      "Gemeinden": "Salmsach"
    },
    {
      "PLZ": 8600,
      "Kanton": "ZH",
      "Gemeinden": "D�bendorf"
    },
    {
      "PLZ": 8602,
      "Kanton": "ZH",
      "Gemeinden": "Wangen-Br�ttisellen"
    },
    {
      "PLZ": 8603,
      "Kanton": "ZH",
      "Gemeinden": "Schwerzenbach"
    },
    {
      "PLZ": 8604,
      "Kanton": "ZH",
      "Gemeinden": "Volketswil"
    },
    {
      "PLZ": 8605,
      "Kanton": "ZH",
      "Gemeinden": "Volketswil"
    },
    {
      "PLZ": 8606,
      "Kanton": "ZH",
      "Gemeinden": "Greifensee, Uster"
    },
    {
      "PLZ": 8607,
      "Kanton": "ZH",
      "Gemeinden": "Seegr�ben"
    },
    {
      "PLZ": 8608,
      "Kanton": "ZH",
      "Gemeinden": "Bubikon"
    },
    {
      "PLZ": 8610,
      "Kanton": "ZH",
      "Gemeinden": "Uster"
    },
    {
      "PLZ": 8614,
      "Kanton": "ZH",
      "Gemeinden": "Gossau (ZH), Uster"
    },
    {
      "PLZ": 8615,
      "Kanton": "ZH",
      "Gemeinden": "Uster"
    },
    {
      "PLZ": 8616,
      "Kanton": "ZH",
      "Gemeinden": "Uster"
    },
    {
      "PLZ": 8617,
      "Kanton": "ZH",
      "Gemeinden": "M�nchaltorf"
    },
    {
      "PLZ": 8618,
      "Kanton": "ZH",
      "Gemeinden": "Oetwil am See"
    },
    {
      "PLZ": 8620,
      "Kanton": "ZH",
      "Gemeinden": "Wetzikon (ZH)"
    },
    {
      "PLZ": 8623,
      "Kanton": "ZH",
      "Gemeinden": "Wetzikon (ZH)"
    },
    {
      "PLZ": 8624,
      "Kanton": "ZH",
      "Gemeinden": "Gossau (ZH)"
    },
    {
      "PLZ": 8625,
      "Kanton": "ZH",
      "Gemeinden": "Gossau (ZH)"
    },
    {
      "PLZ": 8626,
      "Kanton": "ZH",
      "Gemeinden": "Gossau (ZH)"
    },
    {
      "PLZ": 8627,
      "Kanton": "ZH",
      "Gemeinden": "Gr�ningen"
    },
    {
      "PLZ": 8630,
      "Kanton": "ZH",
      "Gemeinden": "R�ti (ZH)"
    },
    {
      "PLZ": 8632,
      "Kanton": "ZH",
      "Gemeinden": "D�rnten"
    },
    {
      "PLZ": 8633,
      "Kanton": "ZH",
      "Gemeinden": "Bubikon"
    },
    {
      "PLZ": 8634,
      "Kanton": "ZH",
      "Gemeinden": "Hombrechtikon"
    },
    {
      "PLZ": 8635,
      "Kanton": "ZH",
      "Gemeinden": "D�rnten"
    },
    {
      "PLZ": 8636,
      "Kanton": "ZH",
      "Gemeinden": "Wald (ZH)"
    },
    {
      "PLZ": 8637,
      "Kanton": "ZH",
      "Gemeinden": "Wald (ZH)"
    },
    {
      "PLZ": 8638,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8640,
      "Kanton": "SZ",
      "Gemeinden": "Freienbach, Rapperswil-Jona"
    },
    {
      "PLZ": 8645,
      "Kanton": "SG",
      "Gemeinden": "Rapperswil-Jona"
    },
    {
      "PLZ": 8646,
      "Kanton": "SG",
      "Gemeinden": "Rapperswil-Jona"
    },
    {
      "PLZ": 8700,
      "Kanton": "ZH",
      "Gemeinden": "K�snacht (ZH)"
    },
    {
      "PLZ": 8702,
      "Kanton": "ZH",
      "Gemeinden": "Zollikon"
    },
    {
      "PLZ": 8703,
      "Kanton": "ZH",
      "Gemeinden": "Erlenbach (ZH)"
    },
    {
      "PLZ": 8704,
      "Kanton": "ZH",
      "Gemeinden": "Herrliberg"
    },
    {
      "PLZ": 8706,
      "Kanton": "ZH",
      "Gemeinden": "Meilen"
    },
    {
      "PLZ": 8707,
      "Kanton": "ZH",
      "Gemeinden": "Uetikon am See"
    },
    {
      "PLZ": 8708,
      "Kanton": "ZH",
      "Gemeinden": "M�nnedorf"
    },
    {
      "PLZ": 8712,
      "Kanton": "ZH",
      "Gemeinden": "St�fa"
    },
    {
      "PLZ": 8713,
      "Kanton": "ZH",
      "Gemeinden": "St�fa"
    },
    {
      "PLZ": 8714,
      "Kanton": "ZH",
      "Gemeinden": "Hombrechtikon"
    },
    {
      "PLZ": 8715,
      "Kanton": "SG",
      "Gemeinden": "Rapperswil-Jona"
    },
    {
      "PLZ": 8716,
      "Kanton": "SG",
      "Gemeinden": "Schmerikon"
    },
    {
      "PLZ": 8717,
      "Kanton": "SG",
      "Gemeinden": "Benken (SG)"
    },
    {
      "PLZ": 8718,
      "Kanton": "SG",
      "Gemeinden": "Sch�nis"
    },
    {
      "PLZ": 8722,
      "Kanton": "SG",
      "Gemeinden": "Kaltbrunn"
    },
    {
      "PLZ": 8723,
      "Kanton": "SG",
      "Gemeinden": "Sch�nis"
    },
    {
      "PLZ": 8725,
      "Kanton": "SG",
      "Gemeinden": "Gommiswald"
    },
    {
      "PLZ": 8726,
      "Kanton": "SG",
      "Gemeinden": "Wattwil"
    },
    {
      "PLZ": 8727,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8730,
      "Kanton": "SG",
      "Gemeinden": "Uznach"
    },
    {
      "PLZ": 8732,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8733,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8734,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8735,
      "Kanton": "SG",
      "Gemeinden": "Eschenbach (SG)"
    },
    {
      "PLZ": 8737,
      "Kanton": "SG",
      "Gemeinden": "Gommiswald"
    },
    {
      "PLZ": 8738,
      "Kanton": "SG",
      "Gemeinden": "Gommiswald"
    },
    {
      "PLZ": 8739,
      "Kanton": "SG",
      "Gemeinden": "Gommiswald"
    },
    {
      "PLZ": 8750,
      "Kanton": "GL",
      "Gemeinden": "GL"
    },
    {
      "PLZ": 8751,
      "Kanton": "UR",
      "Gemeinden": "Spiringen"
    },
    {
      "PLZ": 8752,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8753,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8754,
      "Kanton": "GL",
      "Gemeinden": "GL"
    },
    {
      "PLZ": 8755,
      "Kanton": "GL",
      "Gemeinden": "GL"
    },
    {
      "PLZ": 8756,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8757,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8758,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8762,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8765,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8766,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8767,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8772,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8773,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8774,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8775,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8777,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8782,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8783,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8784,
      "Kanton": "GL",
      "Gemeinden": "GL S�d"
    },
    {
      "PLZ": 8800,
      "Kanton": "ZH",
      "Gemeinden": "Thalwil"
    },
    {
      "PLZ": 8802,
      "Kanton": "ZH",
      "Gemeinden": "Kilchberg (ZH)"
    },
    {
      "PLZ": 8803,
      "Kanton": "ZH",
      "Gemeinden": "R�schlikon"
    },
    {
      "PLZ": 8804,
      "Kanton": "ZH",
      "Gemeinden": "W�denswil"
    },
    {
      "PLZ": 8805,
      "Kanton": "ZH",
      "Gemeinden": "Richterswil"
    },
    {
      "PLZ": 8806,
      "Kanton": "SZ",
      "Gemeinden": "Freienbach"
    },
    {
      "PLZ": 8807,
      "Kanton": "SZ",
      "Gemeinden": "Freienbach"
    },
    {
      "PLZ": 8808,
      "Kanton": "SZ",
      "Gemeinden": "Freienbach"
    },
    {
      "PLZ": 8810,
      "Kanton": "ZH",
      "Gemeinden": "Horgen"
    },
    {
      "PLZ": 8815,
      "Kanton": "ZH",
      "Gemeinden": "Horgen"
    },
    {
      "PLZ": 8816,
      "Kanton": "ZH",
      "Gemeinden": "Hirzel"
    },
    {
      "PLZ": 8820,
      "Kanton": "ZH",
      "Gemeinden": "W�denswil"
    },
    {
      "PLZ": 8824,
      "Kanton": "ZH",
      "Gemeinden": "Sch�nenberg (ZH)"
    },
    {
      "PLZ": 8825,
      "Kanton": "ZH",
      "Gemeinden": "H�tten"
    },
    {
      "PLZ": 8832,
      "Kanton": "SZ",
      "Gemeinden": "Freienbach, Wollerau"
    },
    {
      "PLZ": 8833,
      "Kanton": "ZH",
      "Gemeinden": "Richterswil"
    },
    {
      "PLZ": 8834,
      "Kanton": "SZ",
      "Gemeinden": "Feusisberg"
    },
    {
      "PLZ": 8835,
      "Kanton": "SZ",
      "Gemeinden": "Feusisberg"
    },
    {
      "PLZ": 8836,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8840,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8841,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8842,
      "Kanton": "SZ",
      "Gemeinden": "Unteriberg"
    },
    {
      "PLZ": 8843,
      "Kanton": "SZ",
      "Gemeinden": "Oberiberg"
    },
    {
      "PLZ": 8844,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8845,
      "Kanton": "SZ",
      "Gemeinden": "Unteriberg"
    },
    {
      "PLZ": 8846,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8847,
      "Kanton": "SZ",
      "Gemeinden": "Einsiedeln"
    },
    {
      "PLZ": 8849,
      "Kanton": "SZ",
      "Gemeinden": "Alpthal"
    },
    {
      "PLZ": 8852,
      "Kanton": "SZ",
      "Gemeinden": "Altendorf"
    },
    {
      "PLZ": 8853,
      "Kanton": "SZ",
      "Gemeinden": "Lachen"
    },
    {
      "PLZ": 8854,
      "Kanton": "SZ",
      "Gemeinden": "Galgenen, Sch�belbach"
    },
    {
      "PLZ": 8855,
      "Kanton": "SZ",
      "Gemeinden": "Wangen (SZ)"
    },
    {
      "PLZ": 8856,
      "Kanton": "SZ",
      "Gemeinden": "Tuggen"
    },
    {
      "PLZ": 8857,
      "Kanton": "SZ",
      "Gemeinden": "Vorderthal"
    },
    {
      "PLZ": 8858,
      "Kanton": "SZ",
      "Gemeinden": "Innerthal"
    },
    {
      "PLZ": 8862,
      "Kanton": "SZ",
      "Gemeinden": "Sch�belbach"
    },
    {
      "PLZ": 8863,
      "Kanton": "SZ",
      "Gemeinden": "Sch�belbach"
    },
    {
      "PLZ": 8864,
      "Kanton": "SZ",
      "Gemeinden": "Reichenburg"
    },
    {
      "PLZ": 8865,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8866,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8867,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8868,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8872,
      "Kanton": "SG",
      "Gemeinden": "Weesen"
    },
    {
      "PLZ": 8873,
      "Kanton": "SG",
      "Gemeinden": "Amden"
    },
    {
      "PLZ": 8874,
      "Kanton": "GL",
      "Gemeinden": "GL Nord"
    },
    {
      "PLZ": 8877,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8878,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8880,
      "Kanton": "SG",
      "Gemeinden": "Walenstadt"
    },
    {
      "PLZ": 8881,
      "Kanton": "SG",
      "Gemeinden": "Walenstadt"
    },
    {
      "PLZ": 8882,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8883,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8884,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8885,
      "Kanton": "SG",
      "Gemeinden": "Quarten"
    },
    {
      "PLZ": 8886,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 8887,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 8888,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 8889,
      "Kanton": "SG",
      "Gemeinden": "Mels"
    },
    {
      "PLZ": 8890,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8892,
      "Kanton": "SG",
      "Gemeinden": "Walenstadt"
    },
    {
      "PLZ": 8893,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8894,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8895,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8896,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8897,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8898,
      "Kanton": "SG",
      "Gemeinden": "Flums"
    },
    {
      "PLZ": 8902,
      "Kanton": "ZH",
      "Gemeinden": "Urdorf"
    },
    {
      "PLZ": 8903,
      "Kanton": "ZH",
      "Gemeinden": "Birmensdorf (ZH)"
    },
    {
      "PLZ": 8904,
      "Kanton": "ZH",
      "Gemeinden": "Aesch (ZH)"
    },
    {
      "PLZ": 8905,
      "Kanton": "AG",
      "Gemeinden": "Arni (AG), Islisberg"
    },
    {
      "PLZ": 8906,
      "Kanton": "ZH",
      "Gemeinden": "Bonstetten"
    },
    {
      "PLZ": 8907,
      "Kanton": "ZH",
      "Gemeinden": "Wettswil am Albis"
    },
    {
      "PLZ": 8908,
      "Kanton": "ZH",
      "Gemeinden": "Hedingen"
    },
    {
      "PLZ": 8909,
      "Kanton": "ZH",
      "Gemeinden": "Affoltern am Albis"
    },
    {
      "PLZ": 8910,
      "Kanton": "ZH",
      "Gemeinden": "Affoltern am Albis"
    },
    {
      "PLZ": 8911,
      "Kanton": "ZH",
      "Gemeinden": "Rifferswil"
    },
    {
      "PLZ": 8912,
      "Kanton": "ZH",
      "Gemeinden": "Obfelden"
    },
    {
      "PLZ": 8913,
      "Kanton": "ZH",
      "Gemeinden": "Ottenbach"
    },
    {
      "PLZ": 8914,
      "Kanton": "ZH",
      "Gemeinden": "Aeugst am Albis"
    },
    {
      "PLZ": 8915,
      "Kanton": "ZH",
      "Gemeinden": "Hausen am Albis"
    },
    {
      "PLZ": 8916,
      "Kanton": "AG",
      "Gemeinden": "Jonen"
    },
    {
      "PLZ": 8917,
      "Kanton": "AG",
      "Gemeinden": "Oberlunkhofen"
    },
    {
      "PLZ": 8918,
      "Kanton": "AG",
      "Gemeinden": "Unterlunkhofen"
    },
    {
      "PLZ": 8919,
      "Kanton": "AG",
      "Gemeinden": "Rottenschwil"
    },
    {
      "PLZ": 8925,
      "Kanton": "ZH",
      "Gemeinden": "Hausen am Albis"
    },
    {
      "PLZ": 8926,
      "Kanton": "ZH",
      "Gemeinden": "Kappel am Albis"
    },
    {
      "PLZ": 8932,
      "Kanton": "ZH",
      "Gemeinden": "Mettmenstetten"
    },
    {
      "PLZ": 8933,
      "Kanton": "ZH",
      "Gemeinden": "Maschwanden"
    },
    {
      "PLZ": 8934,
      "Kanton": "ZH",
      "Gemeinden": "Knonau"
    },
    {
      "PLZ": 8942,
      "Kanton": "ZH",
      "Gemeinden": "Oberrieden"
    },
    {
      "PLZ": 8951,
      "Kanton": "ZH",
      "Gemeinden": "Weiningen (ZH)"
    },
    {
      "PLZ": 8952,
      "Kanton": "ZH",
      "Gemeinden": "Schlieren"
    },
    {
      "PLZ": 8953,
      "Kanton": "ZH",
      "Gemeinden": "Dietikon"
    },
    {
      "PLZ": 8954,
      "Kanton": "ZH",
      "Gemeinden": "Geroldswil"
    },
    {
      "PLZ": 8955,
      "Kanton": "ZH",
      "Gemeinden": "Oetwil an der Limmat"
    },
    {
      "PLZ": 8956,
      "Kanton": "AG",
      "Gemeinden": "Killwangen"
    },
    {
      "PLZ": 8957,
      "Kanton": "AG",
      "Gemeinden": "Spreitenbach"
    },
    {
      "PLZ": 8962,
      "Kanton": "AG",
      "Gemeinden": "Bergdietikon"
    },
    {
      "PLZ": 8964,
      "Kanton": "AG",
      "Gemeinden": "Rudolfstetten-Friedlisberg"
    },
    {
      "PLZ": 8965,
      "Kanton": "AG",
      "Gemeinden": "Berikon"
    },
    {
      "PLZ": 8966,
      "Kanton": "AG",
      "Gemeinden": "Oberwil-Lieli"
    },
    {
      "PLZ": 8967,
      "Kanton": "AG",
      "Gemeinden": "Widen"
    },
    {
      "PLZ": 9000,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9008,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9010,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9011,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9012,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9014,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9015,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9016,
      "Kanton": "SG",
      "Gemeinden": "SG"
    },
    {
      "PLZ": 9030,
      "Kanton": "SG",
      "Gemeinden": "Gaiserwald"
    },
    {
      "PLZ": 9032,
      "Kanton": "SG",
      "Gemeinden": "Gaiserwald"
    },
    {
      "PLZ": 9033,
      "Kanton": "SG",
      "Gemeinden": "Untereggen"
    },
    {
      "PLZ": 9034,
      "Kanton": "SG",
      "Gemeinden": "Eggersriet"
    },
    {
      "PLZ": 9035,
      "Kanton": "AR",
      "Gemeinden": "Grub (AR)"
    },
    {
      "PLZ": 9036,
      "Kanton": "SG",
      "Gemeinden": "Eggersriet"
    },
    {
      "PLZ": 9037,
      "Kanton": "AR",
      "Gemeinden": "Speicher"
    },
    {
      "PLZ": 9038,
      "Kanton": "AR",
      "Gemeinden": "Rehetobel"
    },
    {
      "PLZ": 9042,
      "Kanton": "AR",
      "Gemeinden": "Speicher"
    },
    {
      "PLZ": 9043,
      "Kanton": "AR",
      "Gemeinden": "Trogen"
    },
    {
      "PLZ": 9044,
      "Kanton": "AR",
      "Gemeinden": "Wald (AR)"
    },
    {
      "PLZ": 9050,
      "Kanton": "AI",
      "Gemeinden": "Appenzell, R�te, Schlatt-Haslen"
    },
    {
      "PLZ": 9052,
      "Kanton": "AR",
      "Gemeinden": "Teufen (AR)"
    },
    {
      "PLZ": 9053,
      "Kanton": "AR",
      "Gemeinden": "Teufen (AR)"
    },
    {
      "PLZ": 9054,
      "Kanton": "AI",
      "Gemeinden": "Schlatt-Haslen"
    },
    {
      "PLZ": 9055,
      "Kanton": "AR",
      "Gemeinden": "B�hler"
    },
    {
      "PLZ": 9056,
      "Kanton": "AR",
      "Gemeinden": "Gais"
    },
    {
      "PLZ": 9057,
      "Kanton": "AI",
      "Gemeinden": "Schwende"
    },
    {
      "PLZ": 9058,
      "Kanton": "AI",
      "Gemeinden": "R�te"
    },
    {
      "PLZ": 9062,
      "Kanton": "AR",
      "Gemeinden": "Teufen (AR)"
    },
    {
      "PLZ": 9063,
      "Kanton": "AR",
      "Gemeinden": "Stein (AR)"
    },
    {
      "PLZ": 9064,
      "Kanton": "AR",
      "Gemeinden": "Hundwil"
    },
    {
      "PLZ": 9100,
      "Kanton": "AR",
      "Gemeinden": "Herisau"
    },
    {
      "PLZ": 9103,
      "Kanton": "AR",
      "Gemeinden": "Schwellbrunn"
    },
    {
      "PLZ": 9104,
      "Kanton": "AR",
      "Gemeinden": "Waldstatt"
    },
    {
      "PLZ": 9105,
      "Kanton": "AR",
      "Gemeinden": "Sch�nengrund"
    },
    {
      "PLZ": 9107,
      "Kanton": "AR",
      "Gemeinden": "Urn�sch"
    },
    {
      "PLZ": 9108,
      "Kanton": "AI",
      "Gemeinden": "Gonten"
    },
    {
      "PLZ": 9112,
      "Kanton": "AR",
      "Gemeinden": "Herisau"
    },
    {
      "PLZ": 9113,
      "Kanton": "SG",
      "Gemeinden": "Degersheim"
    },
    {
      "PLZ": 9114,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9115,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9116,
      "Kanton": "SG",
      "Gemeinden": "Degersheim"
    },
    {
      "PLZ": 9122,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9123,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9125,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9126,
      "Kanton": "SG",
      "Gemeinden": "Oberhelfenschwil"
    },
    {
      "PLZ": 9127,
      "Kanton": "SG",
      "Gemeinden": "Neckertal"
    },
    {
      "PLZ": 9200,
      "Kanton": "SG",
      "Gemeinden": "Gossau (SG)"
    },
    {
      "PLZ": 9203,
      "Kanton": "SG",
      "Gemeinden": "Oberb�ren"
    },
    {
      "PLZ": 9204,
      "Kanton": "SG",
      "Gemeinden": "Andwil (SG)"
    },
    {
      "PLZ": 9205,
      "Kanton": "SG",
      "Gemeinden": "Waldkirch"
    },
    {
      "PLZ": 9212,
      "Kanton": "SG",
      "Gemeinden": "Gossau (SG)"
    },
    {
      "PLZ": 9213,
      "Kanton": "TG",
      "Gemeinden": "Hauptwil-Gottshaus"
    },
    {
      "PLZ": 9214,
      "Kanton": "TG",
      "Gemeinden": "Kradolf-Sch�nenberg"
    },
    {
      "PLZ": 9215,
      "Kanton": "TG",
      "Gemeinden": "Kradolf-Sch�nenberg"
    },
    {
      "PLZ": 9216,
      "Kanton": "TG",
      "Gemeinden": "Hohentannen"
    },
    {
      "PLZ": 9217,
      "Kanton": "TG",
      "Gemeinden": "Kradolf-Sch�nenberg"
    },
    {
      "PLZ": 9220,
      "Kanton": "TG",
      "Gemeinden": "Bischofszell"
    },
    {
      "PLZ": 9223,
      "Kanton": "TG",
      "Gemeinden": "Bischofszell"
    },
    {
      "PLZ": 9225,
      "Kanton": "TG",
      "Gemeinden": "Hauptwil-Gottshaus"
    },
    {
      "PLZ": 9230,
      "Kanton": "SG",
      "Gemeinden": "Flawil"
    },
    {
      "PLZ": 9231,
      "Kanton": "SG",
      "Gemeinden": "Flawil"
    },
    {
      "PLZ": 9240,
      "Kanton": "SG",
      "Gemeinden": "Oberuzwil, Uzwil"
    },
    {
      "PLZ": 9242,
      "Kanton": "SG",
      "Gemeinden": "Oberuzwil"
    },
    {
      "PLZ": 9243,
      "Kanton": "SG",
      "Gemeinden": "Jonschwil"
    },
    {
      "PLZ": 9244,
      "Kanton": "SG",
      "Gemeinden": "Uzwil"
    },
    {
      "PLZ": 9245,
      "Kanton": "SG",
      "Gemeinden": "Oberb�ren"
    },
    {
      "PLZ": 9246,
      "Kanton": "SG",
      "Gemeinden": "Niederb�ren"
    },
    {
      "PLZ": 9247,
      "Kanton": "SG",
      "Gemeinden": "Uzwil"
    },
    {
      "PLZ": 9248,
      "Kanton": "SG",
      "Gemeinden": "Oberuzwil"
    },
    {
      "PLZ": 9249,
      "Kanton": "SG",
      "Gemeinden": "Uzwil"
    },
    {
      "PLZ": 9300,
      "Kanton": "SG",
      "Gemeinden": "Wittenbach"
    },
    {
      "PLZ": 9304,
      "Kanton": "SG",
      "Gemeinden": "Waldkirch"
    },
    {
      "PLZ": 9305,
      "Kanton": "SG",
      "Gemeinden": "Berg (SG)"
    },
    {
      "PLZ": 9306,
      "Kanton": "TG",
      "Gemeinden": "Roggwil (TG)"
    },
    {
      "PLZ": 9308,
      "Kanton": "SG",
      "Gemeinden": "H�ggenschwil"
    },
    {
      "PLZ": 9312,
      "Kanton": "SG",
      "Gemeinden": "H�ggenschwil"
    },
    {
      "PLZ": 9313,
      "Kanton": "SG",
      "Gemeinden": "Muolen"
    },
    {
      "PLZ": 9314,
      "Kanton": "TG",
      "Gemeinden": "Egnach"
    },
    {
      "PLZ": 9315,
      "Kanton": "TG",
      "Gemeinden": "Egnach"
    },
    {
      "PLZ": 9320,
      "Kanton": "TG",
      "Gemeinden": "Arbon"
    },
    {
      "PLZ": 9322,
      "Kanton": "TG",
      "Gemeinden": "Egnach"
    },
    {
      "PLZ": 9323,
      "Kanton": "SG",
      "Gemeinden": "Steinach"
    },
    {
      "PLZ": 9325,
      "Kanton": "TG",
      "Gemeinden": "Roggwil (TG)"
    },
    {
      "PLZ": 9326,
      "Kanton": "TG",
      "Gemeinden": "Horn"
    },
    {
      "PLZ": 9327,
      "Kanton": "SG",
      "Gemeinden": "T�bach"
    },
    {
      "PLZ": 9400,
      "Kanton": "SG",
      "Gemeinden": "Rorschach"
    },
    {
      "PLZ": 9402,
      "Kanton": "SG",
      "Gemeinden": "M�rschwil"
    },
    {
      "PLZ": 9403,
      "Kanton": "SG",
      "Gemeinden": "Goldach"
    },
    {
      "PLZ": 9404,
      "Kanton": "SG",
      "Gemeinden": "Rorschacherberg"
    },
    {
      "PLZ": 9405,
      "Kanton": "AR",
      "Gemeinden": "Lutzenberg"
    },
    {
      "PLZ": 9410,
      "Kanton": "AR",
      "Gemeinden": "Heiden"
    },
    {
      "PLZ": 9411,
      "Kanton": "SG",
      "Gemeinden": "BEeck, Reute (AR)"
    },
    {
      "PLZ": 9413,
      "Kanton": "AI",
      "Gemeinden": "Oberegg"
    },
    {
      "PLZ": 9422,
      "Kanton": "SG",
      "Gemeinden": "Thal"
    },
    {
      "PLZ": 9423,
      "Kanton": "SG",
      "Gemeinden": "Thal"
    },
    {
      "PLZ": 9424,
      "Kanton": "SG",
      "Gemeinden": "Rheineck"
    },
    {
      "PLZ": 9425,
      "Kanton": "SG",
      "Gemeinden": "Thal"
    },
    {
      "PLZ": 9426,
      "Kanton": "AR",
      "Gemeinden": "Lutzenberg"
    },
    {
      "PLZ": 9427,
      "Kanton": "AR",
      "Gemeinden": "Wolfhalden"
    },
    {
      "PLZ": 9428,
      "Kanton": "AR",
      "Gemeinden": "Walzenhausen"
    },
    {
      "PLZ": 9430,
      "Kanton": "SG",
      "Gemeinden": "St. Margrethen"
    },
    {
      "PLZ": 9434,
      "Kanton": "SG",
      "Gemeinden": "Au (SG)"
    },
    {
      "PLZ": 9435,
      "Kanton": "SG",
      "Gemeinden": "Au (SG)"
    },
    {
      "PLZ": 9436,
      "Kanton": "SG",
      "Gemeinden": "Balgach"
    },
    {
      "PLZ": 9437,
      "Kanton": "SG",
      "Gemeinden": "Marbach (SG)"
    },
    {
      "PLZ": 9442,
      "Kanton": "SG",
      "Gemeinden": "BEeck, Oberegg"
    },
    {
      "PLZ": 9443,
      "Kanton": "SG",
      "Gemeinden": "Widnau"
    },
    {
      "PLZ": 9444,
      "Kanton": "SG",
      "Gemeinden": "Diepoldsau"
    },
    {
      "PLZ": 9445,
      "Kanton": "SG",
      "Gemeinden": "Rebstein"
    },
    {
      "PLZ": 9450,
      "Kanton": "SG",
      "Gemeinden": "Altst�tten"
    },
    {
      "PLZ": 9451,
      "Kanton": "SG",
      "Gemeinden": "Oberriet (SG)"
    },
    {
      "PLZ": 9452,
      "Kanton": "SG",
      "Gemeinden": "Altst�tten"
    },
    {
      "PLZ": 9453,
      "Kanton": "SG",
      "Gemeinden": "Eichberg"
    },
    {
      "PLZ": 9462,
      "Kanton": "SG",
      "Gemeinden": "Oberriet (SG)"
    },
    {
      "PLZ": 9463,
      "Kanton": "SG",
      "Gemeinden": "Oberriet (SG)"
    },
    {
      "PLZ": 9464,
      "Kanton": "SG",
      "Gemeinden": "Altst�tten, R�thi (SG)"
    },
    {
      "PLZ": 9465,
      "Kanton": "SG",
      "Gemeinden": "Sennwald"
    },
    {
      "PLZ": 9466,
      "Kanton": "SG",
      "Gemeinden": "Sennwald"
    },
    {
      "PLZ": 9467,
      "Kanton": "SG",
      "Gemeinden": "Sennwald"
    },
    {
      "PLZ": 9468,
      "Kanton": "SG",
      "Gemeinden": "Sennwald"
    },
    {
      "PLZ": 9469,
      "Kanton": "SG",
      "Gemeinden": "Sennwald"
    },
    {
      "PLZ": 9470,
      "Kanton": "SG",
      "Gemeinden": "Buchs (SG), Grabs"
    },
    {
      "PLZ": 9472,
      "Kanton": "SG",
      "Gemeinden": "Grabs"
    },
    {
      "PLZ": 9473,
      "Kanton": "SG",
      "Gemeinden": "Gams"
    },
    {
      "PLZ": 9475,
      "Kanton": "SG",
      "Gemeinden": "Sevelen"
    },
    {
      "PLZ": 9476,
      "Kanton": "SG",
      "Gemeinden": "Wartau"
    },
    {
      "PLZ": 9477,
      "Kanton": "SG",
      "Gemeinden": "Wartau"
    },
    {
      "PLZ": 9478,
      "Kanton": "SG",
      "Gemeinden": "Wartau"
    },
    {
      "PLZ": 9479,
      "Kanton": "SG",
      "Gemeinden": "Wartau"
    },
    {
      "PLZ": 9485,
      "Kanton": "FL",
      "Gemeinden": "Eschen"
    },
    {
      "PLZ": 9486,
      "Kanton": "FL",
      "Gemeinden": "Mauren"
    },
    {
      "PLZ": 9487,
      "Kanton": "FL",
      "Gemeinden": "Gamprin"
    },
    {
      "PLZ": 9488,
      "Kanton": "FL",
      "Gemeinden": "Schellenberg"
    },
    {
      "PLZ": 9490,
      "Kanton": "FL",
      "Gemeinden": "Vaduz"
    },
    {
      "PLZ": 9491,
      "Kanton": "FL",
      "Gemeinden": "Ruggell"
    },
    {
      "PLZ": 9492,
      "Kanton": "FL",
      "Gemeinden": "Eschen"
    },
    {
      "PLZ": 9493,
      "Kanton": "FL",
      "Gemeinden": "Mauren"
    },
    {
      "PLZ": 9494,
      "Kanton": "FL",
      "Gemeinden": "Schaan"
    },
    {
      "PLZ": 9495,
      "Kanton": "FL",
      "Gemeinden": "Triesen"
    },
    {
      "PLZ": 9496,
      "Kanton": "FL",
      "Gemeinden": "Balzers"
    },
    {
      "PLZ": 9497,
      "Kanton": "FL",
      "Gemeinden": "Triesenberg"
    },
    {
      "PLZ": 9498,
      "Kanton": "FL",
      "Gemeinden": "Planken"
    },
    {
      "PLZ": 9500,
      "Kanton": "SG",
      "Gemeinden": "Kirchberg (SG), Wil (SG)"
    },
    {
      "PLZ": 9502,
      "Kanton": "TG",
      "Gemeinden": "Braunau"
    },
    {
      "PLZ": 9503,
      "Kanton": "TG",
      "Gemeinden": "Bussnang"
    },
    {
      "PLZ": 9504,
      "Kanton": "TG",
      "Gemeinden": "Bussnang"
    },
    {
      "PLZ": 9506,
      "Kanton": "TG",
      "Gemeinden": "Lommis"
    },
    {
      "PLZ": 9507,
      "Kanton": "TG",
      "Gemeinden": "Stettfurt"
    },
    {
      "PLZ": 9508,
      "Kanton": "TG",
      "Gemeinden": "Lommis"
    },
    {
      "PLZ": 9512,
      "Kanton": "SG",
      "Gemeinden": "Wil (SG)"
    },
    {
      "PLZ": 9514,
      "Kanton": "TG",
      "Gemeinden": "Wuppenau"
    },
    {
      "PLZ": 9515,
      "Kanton": "TG",
      "Gemeinden": "Wuppenau"
    },
    {
      "PLZ": 9517,
      "Kanton": "TG",
      "Gemeinden": "Bussnang"
    },
    {
      "PLZ": 9523,
      "Kanton": "SG",
      "Gemeinden": "Zuzwil (SG)"
    },
    {
      "PLZ": 9524,
      "Kanton": "SG",
      "Gemeinden": "Zuzwil (SG)"
    },
    {
      "PLZ": 9525,
      "Kanton": "SG",
      "Gemeinden": "Niederhelfenschwil"
    },
    {
      "PLZ": 9526,
      "Kanton": "SG",
      "Gemeinden": "Niederhelfenschwil"
    },
    {
      "PLZ": 9527,
      "Kanton": "SG",
      "Gemeinden": "Niederhelfenschwil"
    },
    {
      "PLZ": 9532,
      "Kanton": "SG",
      "Gemeinden": "Jonschwil, Rickenbach (TG)"
    },
    {
      "PLZ": 9533,
      "Kanton": "SG",
      "Gemeinden": "Kirchberg (SG)"
    },
    {
      "PLZ": 9534,
      "Kanton": "SG",
      "Gemeinden": "Kirchberg (SG)"
    },
    {
      "PLZ": 9535,
      "Kanton": "TG",
      "Gemeinden": "Wilen (TG)"
    },
    {
      "PLZ": 9536,
      "Kanton": "SG",
      "Gemeinden": "Jonschwil"
    },
    {
      "PLZ": 9542,
      "Kanton": "TG",
      "Gemeinden": "M�nchwilen (TG)"
    },
    {
      "PLZ": 9543,
      "Kanton": "TG",
      "Gemeinden": "M�nchwilen (TG)"
    },
    {
      "PLZ": 9545,
      "Kanton": "TG",
      "Gemeinden": "W�ngi"
    },
    {
      "PLZ": 9546,
      "Kanton": "TG",
      "Gemeinden": "W�ngi"
    },
    {
      "PLZ": 9547,
      "Kanton": "TG",
      "Gemeinden": "Aadorf"
    },
    {
      "PLZ": 9548,
      "Kanton": "TG",
      "Gemeinden": "Matzingen"
    },
    {
      "PLZ": 9552,
      "Kanton": "SG",
      "Gemeinden": "Wil (SG)"
    },
    {
      "PLZ": 9553,
      "Kanton": "TG",
      "Gemeinden": "Bettwiesen"
    },
    {
      "PLZ": 9554,
      "Kanton": "TG",
      "Gemeinden": "Tobel-T�gerschen"
    },
    {
      "PLZ": 9555,
      "Kanton": "TG",
      "Gemeinden": "Tobel-T�gerschen"
    },
    {
      "PLZ": 9556,
      "Kanton": "TG",
      "Gemeinden": "Affeltrangen"
    },
    {
      "PLZ": 9562,
      "Kanton": "TG",
      "Gemeinden": "Affeltrangen"
    },
    {
      "PLZ": 9565,
      "Kanton": "TG",
      "Gemeinden": "Bussnang"
    },
    {
      "PLZ": 9573,
      "Kanton": "TG",
      "Gemeinden": "Sirnach"
    },
    {
      "PLZ": 9601,
      "Kanton": "SG",
      "Gemeinden": "L�tisburg"
    },
    {
      "PLZ": 9602,
      "Kanton": "SG",
      "Gemeinden": "Kirchberg (SG)"
    },
    {
      "PLZ": 9604,
      "Kanton": "SG",
      "Gemeinden": "L�tisburg, Jonschwil"
    },
    {
      "PLZ": 9606,
      "Kanton": "SG",
      "Gemeinden": "B�tschwil-Ganterschwil"
    },
    {
      "PLZ": 9607,
      "Kanton": "SG",
      "Gemeinden": "Mosnang"
    },
    {
      "PLZ": 9608,
      "Kanton": "SG",
      "Gemeinden": "B�tschwil-Ganterschwil"
    },
    {
      "PLZ": 9612,
      "Kanton": "SG",
      "Gemeinden": "Mosnang"
    },
    {
      "PLZ": 9613,
      "Kanton": "SG",
      "Gemeinden": "Mosnang"
    },
    {
      "PLZ": 9614,
      "Kanton": "SG",
      "Gemeinden": "Mosnang"
    },
    {
      "PLZ": 9615,
      "Kanton": "SG",
      "Gemeinden": "B�tschwil-Ganterschwil"
    },
    {
      "PLZ": 9620,
      "Kanton": "SG",
      "Gemeinden": "Lichtensteig"
    },
    {
      "PLZ": 9621,
      "Kanton": "SG",
      "Gemeinden": "Oberhelfenschwil"
    },
    {
      "PLZ": 9622,
      "Kanton": "SG",
      "Gemeinden": "Wattwil"
    },
    {
      "PLZ": 9630,
      "Kanton": "SG",
      "Gemeinden": "Wattwil"
    },
    {
      "PLZ": 9631,
      "Kanton": "SG",
      "Gemeinden": "Wattwil"
    },
    {
      "PLZ": 9633,
      "Kanton": "SG",
      "Gemeinden": "Hemberg"
    },
    {
      "PLZ": 9642,
      "Kanton": "SG",
      "Gemeinden": "Ebnat-Kappel"
    },
    {
      "PLZ": 9643,
      "Kanton": "SG",
      "Gemeinden": "Nesslau"
    },
    {
      "PLZ": 9650,
      "Kanton": "SG",
      "Gemeinden": "Nesslau"
    },
    {
      "PLZ": 9651,
      "Kanton": "SG",
      "Gemeinden": "Nesslau"
    },
    {
      "PLZ": 9652,
      "Kanton": "SG",
      "Gemeinden": "Nesslau"
    },
    {
      "PLZ": 9655,
      "Kanton": "SG",
      "Gemeinden": "Nesslau"
    },
    {
      "PLZ": 9656,
      "Kanton": "SG",
      "Gemeinden": "Wildhaus-Alt St. Johann"
    },
    {
      "PLZ": 9657,
      "Kanton": "SG",
      "Gemeinden": "Wildhaus-Alt St. Johann"
    },
    {
      "PLZ": 9658,
      "Kanton": "SG",
      "Gemeinden": "Wildhaus-Alt St. Johann"
    },
    {
      "PLZ": 9999,
      "Kanton": "BE",
      "Gemeinden": "Bielersee (BE), Brienzersee, Thunersee"
    }
  ]