<?php

class Application_Model_WebServices {

    private $contactDbTable = null;

    function __construct() {
        $this->contactDbTable = new Application_Model_DbTable_Contact();
    }

    /**
     * Adiciona um contato
     * @param string $name
     * @param string $phone
     * @return int
     */
    public function addContact($name, $phone) {
        $contact = $this->contactDbTable->createRow();
        /* @var $contact Application_Model_Contact */
        $contact->setName($name);
        $contact->setPhone($phone);
        return $contact->save();
    }
    
    /**
     * Remove um contato
     * @param int $idContact
     * @return int
     */
    public function removeContact($idContact) {
        $contact = $this->contactDbTable->find($idContact)->current();
        if(is_null($contact)){
            return 0;
        }
        /* @var $contact Application_Model_Contact */
        return $contact->delete();
    }

    /**
     * Retorna todos os contatos
     * @return array
     */
    public function getContacts() {
        $contactsRowSet = $this->contactDbTable->fetchAll();
        $contacts = array();
        foreach ($contactsRowSet as $contactRow) {
            $contact = new stdClass();
            $contact->id_contact = $contactRow->id_contact;
            $contact->name = $contactRow->name;
            $contact->phone = $contactRow->phone;
            $contacts[] = $contact;
        }
        return $contacts;
    }

}

