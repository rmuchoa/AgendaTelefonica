/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service;

import com.model.Contact;
import com.model.Phonebook;
import java.util.ArrayList;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author renanmarceluchoa
 */
@WebService(serviceName = "PhonebookService")
public class PhonebookService {

    private Phonebook phonebook = new Phonebook();
    
    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "insert")
    public String insert(@WebParam(name = "contact") Contact contact) {
    
        phonebook.add(contact);
        return contact.getName() + " inserted";
    
    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "update")
    public String update(@WebParam(name = "contact") Contact contact) {
    
        phonebook.update(contact);
        return contact.getName() + " updated";
    
    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "remove")
    public String remove(@WebParam(name = "contact") Contact contact) {
    
        phonebook.remove(contact);
        return contact.getName() + " removed";
    
    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "list")
    public ArrayList<Contact> list() {
    
        return phonebook.list();
    
    }

}
