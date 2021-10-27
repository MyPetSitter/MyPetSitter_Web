import { UsuariosReadAllComponent } from './components/views/usuarios-read-all/usuarios-read-all/usuarios-read-all.component';
import { ServicosReadAllComponent } from './components/views/servicos-read-all/servicos-read-all/servicos-read-all.component';
import { AdministradorService } from 'src/service/domain/administrador.service';
import { FooteradmComponent } from './components/template/footeradm/footeradm/footeradm.component';
import { NavadmComponent } from './components/template/navadm/navadm/navadm.component';
import { EntrarAdmComponent } from './components/views/entrar-adm/entrar-adm/entrar-adm.component';
import { CidadeService } from 'src/service/cidades.service';
import { ServicopetsitterCreateComponent } from './components/views/servicopetsitter-create/servicopetsitter-create/servicopetsitter-create.component';
import { ServicosdisponiveisComponent } from './components/views/servicosdisponiveis/servicosdisponiveis/servicosdisponiveis.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicoService } from './../service/domain/servico.service';
import { LoginService } from 'src/service/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/views/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import { CriarContaComponent } from './components/views/criar-conta/criar-conta.component';
import {MatListModule} from '@angular/material/list';
import { ComoFuncionaComponent } from './components/views/como-funciona/como-funciona.component';
import {MatIconModule} from '@angular/material/icon';
import { QueroSerPetsitterComponent } from './components/views/quero-ser-petsitter/quero-ser-petsitter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PetsitterPerfilComponent } from './components/views/petsitter-perfil/petsitter-perfil.component';
import { HeaderclComponent } from './components/template/headercl/headercl/headercl.component';
import { EntrarComponent } from './components/views/entrar/entrar/entrar.component';
import { StorageService } from 'src/service/storage.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { HeaderpsComponent } from './components/template/headerps/headerps/headerps.component';
import { HeaderadmComponent } from './components/template/headeradm/headeradm/headeradm.component';
import { FooterpsComponent } from './components/template/footerps/footerps/footerps.component';
import { NavpsComponent } from './components/template/navps/navps/navps.component';
import { ServicoPetsitterComponent } from './components/views/servico-petsitter/servico-petsitter/servico-petsitter.component';
import { FooterclComponent } from './components/template/footercl/footercl/footercl.component';
import { DadosPetsitterComponent } from './components/views/dados-petsitter/dados-petsitter/dados-petsitter.component';
import { NavclComponent } from './components/template/navcl/navcl/navcl.component';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { UsuarioService } from 'src/service/domain/usuario.service';
import { SobrenosComponent } from './components/views/sobrenos/sobrenos/sobrenos.component';
import { ComoCriarUmaContaComponent } from './components/views/como-criar-uma-conta/como-criar-uma-conta.component';
import { RecuperarContaComponent } from './components/views/recuperar-conta/recuperar-conta/recuperar-conta.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ServicoPetSitterService } from 'src/service/domain/servicopetsitter.service';
import {MatTableModule} from '@angular/material/table';
import { UpdateServicopetsitterComponent } from './components/views/update-servicopetsitter/update-servicopetsitter/update-servicopetsitter.component';
import { DeleteServicopetsitterComponent } from './components/views/delete-servicopetsitter/delete-servicopetsitter/delete-servicopetsitter.component';
import { PerfilClienteComponent } from './components/views/perfil-cliente/perfil-cliente/perfil-cliente.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { BuscarServicopetsitterComponent } from './components/views/buscar-servicopetsitter/buscar-servicopetsitter/buscar-servicopetsitter.component';
import {MatCardModule} from '@angular/material/card';
import { SolicitacaoservicoCreateComponent } from './components/views/solicitacaoservico-create/solicitacaoservico-create/solicitacaoservico-create.component';
import { SolicitacaoServicoService } from 'src/service/domain/solicitacaoservico.service';
import { DetalhesSolicitacaoservicoComponent } from './components/views/detalhes-solicitacaoservico/detalhes-solicitacaoservico/detalhes-solicitacaoservico.component';
import { ServicoCreateAllComponent } from './components/views/servico-create-all/servico-create-all/servico-create-all.component';
import { ServicoUpdateAllComponent } from './components/views/servico-update-all/servico-update-all/servico-update-all.component';
import { ServicosCreateAllComponent } from './components/views/servicos-create-all/servicos-create-all/servicos-create-all.component';
import { ServicosDeleteAllComponent } from './components/views/servicos-delete-all/servicos-delete-all/servicos-delete-all.component';
import { UsuarioDeleteAllComponent } from './components/views/usuario-delete-all/usuario-delete-all/usuario-delete-all.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CriarContaComponent,
    ComoFuncionaComponent,
    QueroSerPetsitterComponent,
    PetsitterPerfilComponent,
    EntrarComponent,
    EntrarAdmComponent,
    HeaderpsComponent,
    FooterpsComponent,
    NavpsComponent,
    ServicosdisponiveisComponent,
    ServicoPetsitterComponent,
    DadosPetsitterComponent,
    SobrenosComponent,
    ComoCriarUmaContaComponent,
    RecuperarContaComponent,
    HeaderadmComponent,
    HeaderclComponent,
    FooterclComponent,
    UpdateServicopetsitterComponent,
    ServicopetsitterCreateComponent,
    NavclComponent,
    DeleteServicopetsitterComponent,
    PerfilClienteComponent,
    BuscarServicopetsitterComponent,
    SolicitacaoservicoCreateComponent,
    DetalhesSolicitacaoservicoComponent,
    NavadmComponent,
    FooteradmComponent,
    ServicosReadAllComponent,
    ServicoCreateAllComponent,
    ServicoUpdateAllComponent,
    UsuariosReadAllComponent,
    ServicosCreateAllComponent,
    DadosPetsitterComponent,
    ServicosDeleteAllComponent,
    UsuarioDeleteAllComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [
    LoginService,
    UsuarioService,
    CidadeService,
    StorageService,
    AdministradorService,
    ServicoPetSitterService,
    SolicitacaoServicoService,
    ServicoService,
    MatSnackBar,
    MatDatepickerModule, 
    DatePipe, 
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const appRoutingProviders: any[] = [];
