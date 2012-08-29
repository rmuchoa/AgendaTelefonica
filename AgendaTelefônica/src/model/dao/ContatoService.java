package model.dao;

import java.util.List;

import javax.ejb.Remote;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import model.entity.Contato;

@Remote
@WebService
public interface ContatoService {

	@WebMethod
	public Contato adicionarContato(@WebParam(name="contato") Contato contato);
	
	@WebMethod
	public Contato alteraContato(@WebParam(name="contato") Contato contato);
	
	@WebMethod
	public void removerContato(@WebParam(name="contato") Contato contato);
	
	@WebMethod
	public List<Contato> listarContatos();
	
	@WebMethod
	public void importarContatos(@WebParam(name="totalRegistros") Integer totalRegistros,
								 @WebParam(name="contatos") List<Contato> contatos) throws Exception;
	
}
