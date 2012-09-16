/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.model;

import java.io.Serializable;

/**
 *
 * @author renanmarceluchoa
 */
public class Contact implements Serializable {
    
    private Integer id;
    private String name;
    private String phone;
    
    public Contact() {
        
    }
    
    public Contact(Integer id, String name, String  phone) {
    
        this.setId(id);
        this.setName(name);
        this.setPhone(phone);
    
    }

    public int getId() {
    
        return id;
    
    }

    public void setId(int id) {
    
        this.id = id;
    
    }

    public String getName() {
    
        return name;
    
    }

    public void setName(String name) {
    
        this.name = name;
    
    }

    public String getPhone() {
    
        return phone;
    
    }

    public void setPhone(String phone) {
    
        this.phone = phone;
    
    }

}
