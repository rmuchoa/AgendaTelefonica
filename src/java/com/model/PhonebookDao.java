/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.model;

import com.model.Contact;
import java.util.ArrayList;
import javax.ejb.LocalBean;
import javax.ejb.Stateful;

/**
 *
 * @author renanmarceluchoa
 */
@Stateful
@LocalBean
public class PhonebookDao {

    private ArrayList<Contact> contacts = new ArrayList<Contact>();
    private int count = 1;
    
    public boolean add(String name, String phone) {
    
        Contact contact = new Contact(count++, name, phone);
        
        return contacts.add(contact);
    
    }
    
    public boolean update(Integer id, String name, String phone) {
    
        Contact contact = new Contact(id, name, phone);
        
        for (int i=0; i<contacts.size(); i++)
        
            if (contact.getId() == contacts.get(i).getId()) {
            
                contacts.set(i, contact);
                return true;
            
            }
        
        return false;
    
    }
    
    public boolean remove(Integer id, String name, String phone) {
    
        Contact contact = new Contact(id, name, phone);
        
        for (int i=0; i<contacts.size(); i++)
        
            if (contact.getId() == contacts.get(i).getId()) {
            
                contacts.remove(i);
                return true;
                
            }
        
        return false;
    
    }
    
    public ArrayList<Contact> list() {
        
        return contacts;
        
    }
    
}
