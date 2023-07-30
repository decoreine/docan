1 - in app/http/Controller add 2 folder Dashboard & Site

2 - Install laravel-translatable
        composer require spatie/laravel-translatable
3 - Install mcamara laravel-localization
        composer require mcamara/laravel-localization
    Config Files
        php artisan vendor:publish --provider="Mcamara\LaravelLocalization\LaravelLocalizationServiceProvider"
    add to $middlewareAliases in app/Http/Kernel.php
        'localize'                => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRoutes::class,
        'localizationRedirect'    => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRedirectFilter::class,
        'localeSessionRedirect'   => \Mcamara\LaravelLocalization\Middleware\LocaleSessionRedirect::class,
        'localeCookieRedirect'    => \Mcamara\LaravelLocalization\Middleware\LocaleCookieRedirect::class,
        'localeViewPath'          => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationViewPath::class
4 - Installing Laravel DataTables
        composer require yajra/laravel-datatables:^10.0
    Configuration
        php artisan vendor:publish --tag=datatables
4 - Installing Breeze Pest
        composer require laravel/breeze --dev
        php artisan breeze:install
        php artisan migrate
        npm install
        npm run dev
5 - install VueUse
        npm i @vueuse/core
6 - Remove Laravel DataTables && mcamara and more
        composer remove yajra/laravel-datatables
        composer remove mcamara/laravel-localization
        composer remove spatie/laravel-translatable
7 - Insttal tool for stor table
        npm install --save array-sort
        npm install --save @types/array-sort // to install type to use it with typescript
        npm i --save-dev @types/node // to let recuir function work
        add
            "types": ["vite/client","node"],
            "typeRoots": [ "../node_modules/@types" ]
        to tsconfig.json

9 - Install bootstrap icon
        npm i bootstrap-icons
10 - uninstall bootstrap icons
        npm uninstall bootstrap-icons
11 -install pinia
        npm install pinia
12 - install object-path to read json files
        npm i object-path
        npm i --save-dev @types/object-path
13 - install Shiki Shiki is a beautiful Syntax Highlighter. 
        npm i shiki




