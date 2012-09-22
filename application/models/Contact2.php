<?php
/**
 * Description of Contact
 *
 * @author Rafael
 */
class Application_Model_Contact2 {
    
    /** @var string */
    public $id;
    /** @var string */
    public $name;
    /** @var string */
    public $phone;

    /**
     * 
     * @param String $nome
     * @param String $phone
     */
    public function __construct($nome = null, $phone = null) {
      
    }

    
    /**
     * 
     * @return int
     */
    public function getId() {
        return $this->id_contact;
    }
    /**
     * 
     * @param int $id
     */
    public function setId($id) {
        $this->id_contact = $id;
    }
    /**
     * 
     * @return string
     */
    public function getName() {
        return $this->name;
    }
    /**
     * 
     * @param string $name
     */
    public function setName($name) {
        $this->name = $name;
    }
    /**
     * 
     * @return string
     */
    public function getPhone() {
        return $this->phone;
    }
    /**
     * 
     * @param string $phone
     */
    public function setPhone($phone) {
        $this->phone = $phone;
    }


}
