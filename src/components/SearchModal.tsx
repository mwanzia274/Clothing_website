import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  collections: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    itemCount: string;
  }>;
}

const SearchModal = ({ isOpen, onClose, collections }: SearchModalProps) => {
  const { query, setQuery, filteredItems, clearSearch, hasResults, isSearching } = useSearch(
    collections.map(c => ({
      id: c.id.toString(),
      title: c.title,
      description: c.description,
      category: 'Collection'
    }))
  );

  const handleClose = () => {
    clearSearch();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Collections
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for collections, styles, or categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          {query && (
            <Button variant="ghost" size="icon" onClick={clearSearch}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          {!isSearching && (
            <div className="text-center py-8 text-muted-foreground">
              Start typing to search our collections...
            </div>
          )}

          {isSearching && !hasResults && (
            <div className="text-center py-8 text-muted-foreground">
              No collections found for "{query}"
            </div>
          )}

          {hasResults && (
            <div className="space-y-3">
              {filteredItems.map((item) => {
                const collection = collections.find(c => c.id.toString() === item.id);
                if (!collection) return null;

                return (
                  <Card key={item.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer" 
                        onClick={() => {
                          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
                          handleClose();
                        }}>
                    <div className="flex items-center gap-4">
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{collection.title}</h3>
                        <p className="text-sm text-muted-foreground">{collection.description}</p>
                        <p className="text-xs text-primary mt-1">{collection.itemCount}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;