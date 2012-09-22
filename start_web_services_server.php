$server = new Zend_Soap_Server();
$server->setOptions(array(
        'soap_version' => SOAP_1_2,
        'actor' => 'http://localhost/AgendaTelefonicaPHPSOAP/public/webservice.php',
        'encoding' => 'UTF-8'
));
$server->setWsdl('http://localhost/AgendaTelefonicaPHPSOAP/public/webservice.php?wsdl');
$server->setClass('Application_Model_WebServices');
$server->handle();