<?php
require_once('src/Delivery/NovaPoshtaApi2.php');
require_once('src/Delivery/NovaPoshtaApi2Areas.php');

$np = new \LisDev\Delivery\NovaPoshtaApi2(
    '5529d5fa8f6d64d8ec4e8fe105d2ecda',
    'ru', // Язык возвращаемых данных: ru (default) | ua | en
    FALSE, // При ошибке в запросе выбрасывать Exception: FALSE (default) | TRUE
    'curl' // Используемый механизм запроса: curl (defalut) | file_get_content
);
if($_POST['warehouses']) {
    $wh = $np->getWarehouses($_POST['warehouses']);
    foreach ($wh['data'] as $warehouse) {
        echo '<option value="'.$warehouse['DescriptionRu'].'">'.$warehouse['DescriptionRu'].'</option>';
    }
} else {
    $cities = $np->getCities();
    foreach ($cities['data'] as $city) {
        echo '<option data-cname="'.$city['Ref'].'" value="'.$city['DescriptionRu'].'">'.$city['DescriptionRu'].'</option>';
    }
}
?>
