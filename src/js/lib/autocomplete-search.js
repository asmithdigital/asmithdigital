import AutocompleteSearch from './autocomplete-search-plugin'

const autocompleteSettings = {
  noResults: true,
  noResultsParams: {
    sitePath: 'adelaide.edu.au',
    url: 'https://search.adelaide.edu.au/search?site=default_collection&client=uniadl_frontend&output=xml_no_dtd&proxystylesheet=uniadl_sg_frontend&filter=0&q={{query}}&sitesearch={{site}}'
  }
};

let autocomplete = new AutocompleteSearch($('.js-autocomplete__search-wrapper'), autocompleteSettings); // eslint-disable-line no-unused-vars
