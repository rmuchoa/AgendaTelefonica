<?php
/**
 * Description of Contact
 *
 * @author Rafael
 */
class Application_Model_Contact extends Zend_Db_Table_Row_Abstract {
    
    
    public function getId() {
        return $this->id_contact;
    }

    public function setId($id) {
        $this->id_contact = $id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getPhone() {
        return $this->phone;
    }

    public function setPhone($phone) {
        $this->phone = $phone;
    }


}

