package model.dao;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import model.entity.Contato;

@Stateless
@WebService
public class ContatoServiceBean implements ContatoService {

	@EJB
	private ContatoDao contatoDao;

	@Override
	@WebMethod
	public Contato adicionarContato(@WebParam(name="contato") Contato contato) {
	
		return contatoDao.inserir(contato);
	
	}

	@Override
	@WebMethod
	public Contato alteraContato(@WebParam(name="contato") Contato contato) {
	
		return contatoDao.editar(contato);
	
	}

	@Override
	@WebMethod
	public void removerContato(@WebParam(name="contato") Contato contato) {
	
		contatoDao.excluir(contato);
	
	}

	@Override
	@WebMethod
	public List<Contato> listarContatos() {
	
		return contatoDao.listar();
	
	}

	@Override
	@WebMethod
	public void importarContatos(@WebParam(name="totalRegistros") Integer totalRegistros, 
								 @WebParam(name="contatos") List<Contato> contatos) throws Exception {
	
		if(contatos == null || contatos.size() == 0) {
			throw new Exception("O lote de contatos não pode estar vazio");
		}
		
		if(contatos.size() != totalRegistros) {
			throw new Exception("A quantidade de contatos difere do valor informado");
		}
		
		for(Contato contato : contatos) {
			contatoDao.inserir(contato);
		}
	
	}

	public ContatoDao getContatoDao() {
	
		return contatoDao;
	
	}

	public void setContatoDao(ContatoDao contatoDao) {
	
		this.contatoDao = contatoDao;
	
	}
	
	

}
