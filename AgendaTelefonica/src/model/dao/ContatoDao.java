package model.dao;

import java.util.List;

import javax.ejb.Remote;

import model.entity.Contato;

@Remote
public interface ContatoDao {

	public Contato inserir(Contato contato);
	
	public Contato editar(Contato contato);
	
	public void excluir(Contato contato);
	
	public List<Contato> listar();
	
}
