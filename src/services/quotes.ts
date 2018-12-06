import { Quote } from '../data/quote.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        let idx = this.favoriteQuotes.findIndex(
            (q: Quote)=>{
                return q.id==quote.id;
            }
        )
        this.favoriteQuotes.splice(idx,1);
    }
    getFavoriteQuotes() { return this.favoriteQuotes };
    
    isFavorite(quote: Quote){
        let idx = this.favoriteQuotes.findIndex(
            (q: Quote)=>{
                return q.id == quote.id;
            }
        )
        if(idx!=-1){
            return true;
        }
        else return false;
    }
    

}