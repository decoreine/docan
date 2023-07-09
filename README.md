# Metronic -  Laravel Admin Dashboard Theme Install

- For a quick start please check [Online documentation page](//preview.keenthemes.com/metronic8/laravel/documentation/getting-started/build)


### Laravel Quick Start

1. Download the latest theme source from the Marketplace.


2. Download and install `Node.js` from Nodejs. The suggested version to install is `14.16.x LTS`.


3. Start a command prompt window or terminal and change directory to [unpacked path]:


4. Install the latest `NPM`:

        npm install --global npm@latest  (if dont work use 'npm install --force')


5. To install `Composer` globally, download the installer from https://getcomposer.org/download/ Verify that Composer in successfully installed, and version of installed Composer will appear:

        composer --version


6. Install `Composer` dependencies.

        composer install


7. Install `NPM` dependencies.

        npm install


8. The below command will compile all the assets(sass, js, media) to public folder:

        npm run dev


9. Copy `.env.example` file and create duplicate. Use `cp` command for Linux or Max user.

        cp .env.example .env

   If you are using `Windows`, use `copy` instead of `cp`.

        copy .env.example .env



10. Create a table in MySQL database and fill the database details  in `.env` file.

             DB_CONNECTION=mysql
             DB_HOST=127.0.0.1
             DB_PORT=3306
             DB_DATABASE=laravel
             DB_USERNAME=root
             DB_PASSWORD=

11. The below command will create tables into database using Laravel migration and seeder.

        php artisan migrate:fresh --seed


13. Generate your application encryption key:

        php artisan key:generate


14. Start the localhost server:

        php artisan serve

15. Gonfiguration global

        there is three file to Update  in config/global 

            1 - general.php to change theme meta ( demos, Title and global javascript and css link )
            2 - menu.php to add some menu( by default there is (documentation,main,horizontal))
            3 - page.php to add some page( by default there is (login,register,forgot-password,
                                                                log,error,account,users,
                                                                documentation))

16. base view  && index view

           1 - update base view at resources/views/base/base.blade.php (header of all view)
           2 - update dashboard at resources/views/pages/index.blade.php (dashboard view)

17 User Manager Menu

            2 - add users page
            1 - create floder at resources/views/pages call 'users'
            2 - add _navbar.blade.php at users folder// its a commun navbar of all users pages
            3 - create floder at resources/views/pages/users call 'users-list'
            4 - add _details.blade.php at users-list folder
            5 - add users-list.blade.php at users-list folder
            4 - add _details.blade.php at view-user folder
            5 - add view-user.blade.php at view-user folder
