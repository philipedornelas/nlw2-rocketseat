import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/5197003?s=460&v=4" alt="Philipe Dornelas"/>
                <div>
                    <strong>Philipe Dornelas</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Nam mollitia corporis tempore possimus vero sint, fugiat 
                temporibus rerum. Perferendis culpa cupiditate tempora rem, 
                commodi esse tenetur dolor sapiente. Soluta, nulla.
            </p>                     
            
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;