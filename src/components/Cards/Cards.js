import React, { Component } from 'react';
import Card from './Card/Card';
import './Cards.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

class Cards extends Component {
    state = {
        cards: [],
        showAnswer: false,
        index: 0,
        showForm: false,
    }
    onSubmit = event => {
        event.preventDefault();
        const question = this.question.value;
        const answer = this.answer.value;
        const info = { question: question, answer: answer };
        const cards = [...this.state.cards, info];
        if (question && answer) {
            this.setState({
                cards: cards,
                showForm: !this.state.showForm
            });
        } else {
            alert('enter something bitch');
        }
        this.question.value = '';
        this.answer.value = '';
    };

    showAnswerHandler = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }
    toggleFormHandler = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    nextCardHandler = () => {
        if (this.state.index < this.state.cards.length - 1) {
            this.setState({ index: this.state.index + 1 });
        } else {
            return null;
        }
    }
    prevCardHandler = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 });
        } else {
            return null;
        }
    }
    deleteCardHandler = (cardIndex) => {
        const cards = [...this.state.cards];
        cards.splice(cardIndex, 1);
        this.setState({ cards: cards });
    }

    render() {


        const cardsLength = this.state.cards.length;
        const cardsIndex = this.state.index;

        const cards = (this.state.cards).map((card, index) => {
            let cardClass = ['card'];
            if (index === this.state.index) {
                cardClass.push('active');
            }
            if (index === this.state.index && this.state.showAnswer) {
                cardClass.push('show-answer');
            }
            return <Card
                class={cardClass.join(' ')}
                question={card.question}
                answer={card.answer}
                key={index}
                clicked={this.showAnswerHandler}
                delete={this.deleteCardHandler}
            />
        });
        return (
            <React.Fragment>
                <Button clicked={this.toggleFormHandler} btnClass="btn form-btn">
                    New <i className="fas fa-plus"></i>
                </Button>
                <div className="cards">
                    {cards}
                </div>
                <Navigation
                    next={this.nextCardHandler}
                    prev={this.prevCardHandler}
                    currentCard={cardsLength > 0 ? (cardsIndex + 1) + '/' + cardsLength : cardsIndex + '/' + cardsLength}
                />
                <Modal
                    modalClass={this.state.showForm ? 'modal' : 'modal hide'}
                    showModal={this.state.showForm}
                    hideModal={this.toggleFormHandler}>
                    <h3>Add new card +</h3>
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter question..."
                            ref={input => this.question = input} />
                        <div className="input-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Enter answer..."
                                ref={input => this.answer = input} />
                        </div>
                        <button type="submit" className="btn">Add</button>
                    </form>
                </Modal>
            </React.Fragment>
        );
    }
}


export default Cards;