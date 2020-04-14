var CludoSearch;
(function () {
    var cludoSettings = {
        customerId: 2222,
        engineId: 11243,
        searchUrl: 'localhost:8000/search-results',
        language: 'en',
        searchInputs: ['cludo-search-form'],
        template: 'InlineBasic',
        disableAutocomplete: true,
        hideSearchFilters: true,
        focusOnResultsAfterSearch: true,
        type: 'inline'
    };
    CludoSearch = new Cludo(cludoSettings);
    CludoSearch.init();
})();