<?php
if (isset($_GET['wsdl'])) {
    $autodiscover = new Zend_Soap_AutoDiscover();
    $autodiscover->setClass('Application_Model_WebServices');
    $autodiscover->setBindingStyle(array('style' => 'rpc'));
    $autodiscover->handle();
} else {
   ...
}