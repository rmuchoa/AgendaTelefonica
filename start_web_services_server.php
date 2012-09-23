	<?php
	$server = new Zend_Soap_Server();
    $server->setOptions(array(
        'soap_version' => SOAP_1_2,
        'actor' => 'http://' .$_SERVER['HTTP_HOST'] . $_SERVER['SCRIPT_NAME'],
        'encoding' => 'UTF-8'
    ));
    $server->setWsdl('http://' .$_SERVER['HTTP_HOST'] . $_SERVER['SCRIPT_NAME'].'?wsdl');
    $server->setClass('Application_Model_WebServices');
    $server->handle();