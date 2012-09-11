/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.model;

import java.util.ArrayList;

/**
 *
 * @author renanmarceluchoa
 */
public class Phonebook {
    
    private ArrayList<Contact> contacts;
    
    public Phonebook() {
    
        this.contacts = new ArrayList<Contact>();
    
    }
    
    public void add(Contact contact) {
    
        this.contacts.add(contact);
    
    }
    
    public void update(Contact contact) {
    
        for (int i=0; i<contacts.size(); i++)
        
            if (contact.getId() == contacts.get(i).getId())
            
                contacts.set(i, contact);
    
    }
    
    public void remove(Contact contact) {
    
        for (int i=0; i<contacts.size(); i++)
        
            if (contact.getId() == contacts.get(i).getId())
            
                contacts.remove(i);
    
    }
    
    public ArrayList<Contact> list() {
        
        return contacts;
        
    }

}
