/*! Copyright (c) 2006-2011 by OpenLayers Contributors (see authors.txt for
* full list of contributors). Published under the Clear BSD license.
* See http://svn.openlayers.org/trunk/openlayers/license.txt for the
* full text of the license. */

/* Translators (2009 onwards):
 *  - EugeneZelenko
 *  - Jim-by
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["be-tarask"]
 * Dictionary for Белару�?ка�? (тарашкевіца).  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */

OpenLayers.Lang["be-tarask"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "�?еапрацаваны вынік запыту ${statusText}",

    'Permalink': "Стала�? �?па�?ылка",

    'Overlays': "Слаі",

    'Base Layer': "Базавы �?лой",

    'readNotImplemented': "Функцы�?нальна�?ьць чытаньн�? н�? �?творана�?.",

    'writeNotImplemented': "Функцы�?нальна�?ьць запі�?у н�? �?творана�?.",

    'noFID': "�?емагчыма абнавіць магчыма�?ьць, дл�? �?кога не і�?нуе FID.",

    'errorLoadingGML': "Памылка загрузкі файла GML ${url}",

    'browserNotSupported': "Ваш браўз�?р не падтрымлівае в�?ктарную графіку. У ц�?перашні момант падтрымліваюцца: ${renderers}",

    'componentShouldBe': "addFeatures : кампан�?нт павінен быць ${geomType}",

    'getFeatureError': "getFeatureFromEvent выкліканы дл�? �?ло�? б�?з р�?нд�?ру. Звычайна г�?та азначае, што Вы зьнішчылі �?лой, але пакінулі зьв�?заны зь ім апрацоўшчык.",

    'minZoomLevelError': "Ула�?ьціва�?ьць minZoomLevel прызначана толькі дл�? выкары�?таньн�? �?а �?ла�?мі вытворнымі ад FixedZoomLevels. Тое, што  г�?ты wfs-�?лой прав�?раецца на minZoomLevel — р�?ха прошлага. �?ле мы н�? можам выдаліць г�?тую магчыма�?ьць, таму што ад �?е залежаць некаторы�? за�?наваны�? на OL да�?та�?аваньні. Тым н�? менш, праверка minZoomLevel будзе выдалена�? ў в�?р�?іі 3.0. Калі ла�?ка, выкары�?тоўваеце заме�?т �?е ў�?таноўкі мінімальнага/мак�?ымальнага памераў, �?к апі�?ана тут: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS-транзакцы�?: ПОСЬПЕХ ${response}",

    'commitFailed': "WFS-транзакцы�?: П�?МЫЛК�? ${response}",

    'googleWarning': "�?е атрымала�?�? загрузіць �?лой Google. \x3cbr\x3e\x3cbr\x3eКаб пазбавіцца г�?тага паведамленьн�?, выберыце новы базавы �?лой у �?ьпі�?е ў верхнім правым куце.\x3cbr\x3e\x3cbr\x3e Хутч�?й за ў�?ё, прычына ў тым, што �?крыпт біблі�?т�?кі Google Maps н�? быў уключаны�? альбо не ўтрымлівае �?лушны API-ключ дл�? Вашага �?айта.\x3cbr\x3e\x3cbr\x3eРа�?працоўшчыкам: Дл�? таго, каб даведацца �?к зрабіць так, каб у�?ё працавала, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eнаці�?ьніце тут\x3c/a\x3e",

    'getLayerWarning': "�?емагчыма загрузіць �?лой ${layerType}.\x3cbr\x3e\x3cbr\x3eКаб пазбавіцца г�?тага паведамленьн�?, выберыце новы базавы �?лой у �?ьпі�?е ў верхнім правым куце.\x3cbr\x3e\x3cbr\x3eХутч�?й за ў�?ё, прычына ў тым, што �?крыпт біблі�?т�?кі ${layerLib} н�? быў �?лушна ўключаны.\x3cbr\x3e\x3cbr\x3eРа�?працоўшчыкам: Дл�? таго, каб даведацца �?к зрабіць так, каб у�?ё працавала, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eнаці�?ьніце тут\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Маштаб = 1 : ${scaleDenom}",

    'W': "З",

    'E': "У",

    'N': "Пн",

    'S': "Пд",

    'layerAlreadyAdded': "Вы па�?прабавалі дадаць �?лой ${layerName} на мапу, але ён ужо дададзены",

    'reprojectDeprecated': "Вы выкары�?тоўваеце ў�?таноўку \'reproject\' дл�? �?ло�? ${layerName}. Г�?та�? ў�?таноўка зь�?ўл�?ецца �?а�?тар�?лай: �?на выкары�?тоўвала�?�? дл�? падтрымкі паказу зьве�?так на кам�?рцыйных базавых мапах, але г�?та функцы�? ц�?пер р�?алізавана�? ў убудаванай падтрымцы �?ф�?рычнай праекцыі М�?ркатара. Дадаткова�? інфармацы�? ё�?ьць на http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Г�?ты м�?тад �?а�?тар�?лы і будзе выдалены ў в�?р�?іі 3.0. Калі ла�?ка, заме�?т �?го выкары�?тоўвайце ${newMethod}.",

    'boundsAddError': "Вам неабходна падаць абодва знач�?ньні x і y дл�? функцыі �?кладаньн�?.",

    'lonlatAddError': "Вам неабходна падаць абодва знач�?ньні lon і lat дл�? функцыі �?кладаньн�?.",

    'pixelAddError': "Вам неабходна падаць абодва знач�?ньні x і y дл�? функцыі �?кладаньн�?.",

    'unsupportedGeometryType': "Тып геам�?трыі не падтрымліваецца: ${geomType}",

    'filterEvaluateNotImplemented': "evaluate не р�?алізаваны дл�? г�?тага тыпу фільтру."

});
