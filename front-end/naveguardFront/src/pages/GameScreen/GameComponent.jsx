import React from 'react';

const GameComponent = () => {
    return (
        <div>
            <button onClick={() => window.location.href = '/projeto-game1/index.html'}>
                Ir para o projeto JS puro
            </button>
        </div>
    );
};

export default GameComponent;