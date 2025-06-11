import { Routes } from '@angular/router';
import { HomeComponent } from './components/routing/home/home.component';
import { AboutusComponent } from './components/routing/aboutus/aboutus.component';
import { CareersComponent } from './components/routing/careers/careers.component';
import { NotfoundComponent } from './components/routing/notfound/notfound.component';
import { ContactusComponent } from './components/routing/contactus/contactus.component';
import { UsersComponent } from './components/routing/users/users.component';
import { UserdetailsComponent } from './components/routing/userdetails/userdetails.component';
import { ProductlistComponent } from './components/routing/productlist/productlist.component';
import { ProductdetailsComponent } from './components/routing/productdetails/productdetails.component';
import { JavascriptComponent } from './components/routing/javascript/javascript.component';
import { ArrayComponent } from './components/routing/javascript/array/array.component';
import { StringComponent } from './components/routing/javascript/string/string.component';
import { MathComponent } from './components/routing/javascript/math/math.component';
import { ManageVideosComponent } from './components/routing/manage-videos/manage-videos.component';
import { teacherGuard } from './components/routing/guards/teacher.guard';
import { canExitGuard } from './components/routing/guards/can-exit.guard';

export const routes: Routes = [
	  { path: 'home', component: HomeComponent },
	  { path: 'aboutus', component: AboutusComponent },
	  { path: 'careers', component: CareersComponent },
      { path: 'contactus', component: ContactusComponent,
		canDeactivate: [canExitGuard]
	  },
	  { path: 'users', component: UsersComponent},
	  { path: 'userdetails/:id', component: UserdetailsComponent},
	  { path: 'products', component: ProductlistComponent },
	  { path: 'productdetails', component: ProductdetailsComponent },
	  { path: 'javascript', component: JavascriptComponent,
		children:[
			{path: 'array', component: ArrayComponent},
			{path: 'string', component: StringComponent},
			{path: 'math', component: MathComponent}
		]
	   },
	   { path: 'managevideos', component: ManageVideosComponent ,
		canActivate: [teacherGuard]
	   },
      { path: '', component: HomeComponent},
	  { path: '**', component: NotfoundComponent }  
	];
