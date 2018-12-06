import { Quote } from '../data/quote.interface';
import quotes from '../data/quotes';

export class LibraryQuotesService{
    private libraryQuotes: {category:string, quotes: Quote[], icon: string}[];
    private totalQuotes = 14;

    initializeAllQuotes(){
        this.libraryQuotes = quotes;
    }

    getAllQuotes(){
        return this.libraryQuotes;
    }

    addNewQuote(category:string, quote: string, author: string){
        if(category=="education"){
            this.libraryQuotes[0].quotes.push({id:String(this.totalQuotes++), person: author, text: quote});
        }
        else if(category=="travel"){
            this.libraryQuotes[1].quotes.push({id:String(this.totalQuotes++), person: author, text: quote});
        }
        else if(category=="life"){
            this.libraryQuotes[2].quotes.push({id:String(this.totalQuotes++), person: author, text: quote});
        }
        else if(category=="teamwork"){
            this.libraryQuotes[3].quotes.push({id:String(this.totalQuotes++), person: author, text: quote});
        }
        else{
            this.libraryQuotes[4].quotes.push({id:String(this.totalQuotes++), person: author, text: quote});
            console.log("Category not found")
        }
    }
}