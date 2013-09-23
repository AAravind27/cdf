/*! Copyright (c) 2006-2011 by OpenLayers Contributors (see authors.txt for
* full list of contributors). Published under the Clear BSD license.
* See http://svn.openlayers.org/trunk/openlayers/license.txt for the
* full text of the license. */

/* Translators (2009 onwards):
 *  - Ferrer
 *  - Komzpa
 *  - Lockal
 *  - �?лек�?андр Сигачёв
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["ru"]
 * Dictionary for Ру�?�?кий.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */

OpenLayers.Lang["ru"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "�?еобработанный запро�? вернул ${statusText}",

    'Permalink': "По�?то�?нна�? �?�?ылка",

    'Overlays': "Слои",

    'Base Layer': "О�?новной �?лой",

    'readNotImplemented': "Чтение не реализовано.",

    'writeNotImplemented': "Запи�?ь не реализована.",

    'noFID': "�?евозможно обновить объект, дл�? которого нет FID.",

    'errorLoadingGML': "Ошибка при загрузке файла GML ${url}",

    'browserNotSupported': "Ваш браузер не поддерживает векторную графику. �?а данный момент поддерживают�?�?:\n${renderers}",

    'componentShouldBe': "addFeatures: компонент должен быть ${geomType}",

    'getFeatureError': "getFeatureFromEvent вызван дл�? �?ло�? без рендерера. Обычно �?то говорит о том, что вы уничтожили �?лой, но о�?тавили �?в�?занный �? ним обработчик.",

    'minZoomLevelError': "Свой�?тво minZoomLevel предназначено только дл�? и�?пользовани�? �?о �?ло�?ми, �?вл�?ющими�?�? потомками FixedZoomLevels. То, что �?тот WFS-�?лой провер�?ет�?�? на minZoomLevel — реликт прошлого. Однако мы не можем удалить �?ту функцию, так как, возможно, от неё зави�?�?т некоторые о�?нованные на OpenLayers приложени�?. Функци�? объ�?влена у�?таревшей — проверка minZoomLevel будет удалена в 3.0. Пожалуй�?та, и�?пользуйте вме�?то неё на�?тройку мин/мак�? разрешени�?, опи�?анную зде�?ь: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Транзакци�? WFS: УСПЕШ�?О ${response}",

    'commitFailed': "Транзакци�? WFS: ОШИБК�? ${response}",

    'googleWarning': "Слой Google не удало�?ь нормально загрузить.\x3cbr\x3e\x3cbr\x3eЧтобы избавить�?�? от �?того �?ообщени�?, выбите другой о�?новной �?лой в переключателе в правом верхнем углу.\x3cbr\x3e\x3cbr\x3eСкорее в�?его, причина в том, что библиотека Google Maps не была включена или не �?одержит корректного API-ключа дл�? вашего �?айта.\x3cbr\x3e\x3cbr\x3eРазработчикам: чтобы узнать, как �?делать, чтобы в�?ё заработало, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eщёлкните тут\x3c/a\x3e",

    'getLayerWarning': "Слой ${layerType} не удало�?ь нормально загрузить. \x3cbr\x3e\x3cbr\x3eЧтобы избавить�?�? от �?того �?ообщени�?, выбите другой о�?новной �?лой в переключателе в правом верхнем углу.\x3cbr\x3e\x3cbr\x3eСкорее в�?его, причина в том, что библиотека ${layerLib} не была включена или была включена некорректно.\x3cbr\x3e\x3cbr\x3eРазработчикам: чтобы узнать, как �?делать, чтобы в�?ё заработало, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eщёлкните тут\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Ма�?штаб = 1 : ${scaleDenom}",

    'W': "З",

    'E': "В",

    'N': "С",

    'S': "Ю",

    'layerAlreadyAdded': "Вы попытали�?ь добавить �?лой «${layerName}» на карту, но он уже был добавлен",

    'reprojectDeprecated': "Вы и�?пользуете опцию \'reproject\' дл�? �?ло�? ${layerName}. Эта опци�? �?вл�?ет�?�? у�?таревшей: ее и�?пользование предполагало�?ь дл�? поддержки показа данных поверх коммерче�?ких базовых карт, но теперь �?тот функционал не�?ёт в�?троенна�? поддержка �?фериче�?кой проекции Меркатора. Больше �?ведений до�?тупно на http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Этот метод �?читает�?�? у�?таревшим и будет удалён в вер�?ии 3.0. Пожалуй�?та, пользуйте�?ь ${newMethod}.",

    'boundsAddError': "Функции add надо передавать оба значени�?, x и y.",

    'lonlatAddError': "Функции add надо передавать оба значени�?, lon и lat.",

    'pixelAddError': "Функции add надо передавать оба значени�?, x и y.",

    'unsupportedGeometryType': "�?еподдерживаемый тип геометрии: ${geomType}",

    'filterEvaluateNotImplemented': "evaluate не реализовано дл�? фильтра данного типа."

});
