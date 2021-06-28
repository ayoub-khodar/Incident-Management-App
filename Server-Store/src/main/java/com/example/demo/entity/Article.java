package com.example.demo.entity;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Article {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		private String ref;
		private int nbc;
		private int quantite;
		private String categorie;
		private String fournisseur;
		private Date dateLivraison;
		public Article() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Article(String ref, int nbc, int quantite, String categorie, String fournisseur
				,Date dateLivraison) {
			super();
			this.ref = ref;
			this.nbc = nbc;
			this.quantite = quantite;
			this.categorie = categorie;
			this.fournisseur = fournisseur;
			this.dateLivraison = dateLivraison;
		}
		public String getRef() {
			return ref;
		}
		public void setRef(String ref) {
			this.ref = ref;
		}
		public int getNbc() {
			return nbc;
		}
		public void setNbc(int nbc) {
			this.nbc = nbc;
		}
		public int getQuantite() {
			return quantite;
		}
		public void setQuantite(int quantite) {
			this.quantite = quantite;
		}
		
		public String getCategorie() {
			return categorie;
		}
		public void setCategorie(String categorie) {
			this.categorie = categorie;
		}
		public String getFournisseur() {
			return fournisseur;
		}
		public void setFournisseur(String fournisseur) {
			this.fournisseur = fournisseur;
		}
		public Date getDateLivraison() {
			return dateLivraison;
		}
		public void setDateLivraison(Date dateLivraison) {
			this.dateLivraison = dateLivraison;
		}
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((id == null) ? 0 : id.hashCode());
			return result;
		}
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Article other = (Article) obj;
			if (id == null) {
				if (other.id != null)
					return false;
			} else if (!id.equals(other.id))
				return false;
			return true;
		}
		
		
}
