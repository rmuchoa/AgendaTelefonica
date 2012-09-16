package com.service;

import com.model.Contact;
import com.model.Phonebook;
import com.model.PhonebookDao;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author renanmarceluchoa
 */
@WebService(serviceName = "PhonebookService")
@Stateless
public class PhonebookService {

    @EJB
    private PhonebookDao phonebook;

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "insert")
    public String insert(@WebParam(name = "contact") String contact, 
                            @WebParam(name = "phone") String phone) {

        if (phonebook.add(contact, phone))
        
            return contact + " inserted";
        
        return "fail on insert " + contact;

    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "update")
    public String update(@WebParam(name = "id") Integer id, 
                            @WebParam(name = "contact") String contact, 
                            @WebParam(name = "phone") String phone) {

        if (phonebook.update(id, contact, phone))
        
            return contact + " updated";
        
        return "fail on update " + contact;

    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "remove")
    public String remove(@WebParam(name = "id") Integer id, 
                            @WebParam(name = "contact") String contact, 
                            @WebParam(name = "phone") String phone) {

        if (phonebook.remove(id, contact, phone))
        
            return contact + " removed";
        
        return "fail on remove " + contact;

    }

    /**
     * Operação de serviço web
     */
    @WebMethod(operationName = "list")
    public ArrayList<Contact> list() {

        return phonebook.list();

    }

}
