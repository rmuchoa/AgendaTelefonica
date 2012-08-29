package model.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.dao.ContatoDao;
import model.entity.Contato;

@Stateless
public class ContatoDaoBean implements ContatoDao {

	@PersistenceContext(name="AgendaTelefonicaPU")
	private EntityManager em;

	@Override
	public Contato inserir(Contato contato) {
		em.persist(contato);
		return contato;
	}

	@Override
	public Contato editar(Contato contato) {
		em.merge(contato);
		return contato;
	}

	@Override
	public void excluir(Contato contato) {
		em.remove(contato);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Contato> listar() {
		Query query = em.createQuery("From Contato");
		return (List<Contato>) query.getResultList();
	}
	
	
	
}
