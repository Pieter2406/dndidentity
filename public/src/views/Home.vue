<template>
    <div>
        <b-navbar v-if="test" type="dark" variant="primary">
            <b-navbar-brand>DnDIdentity</b-navbar-brand>
        </b-navbar>
        <router-view />
        <footer>
            By: <br />
            Dries Maes <br />
            Jonas Govaerts <br />
            Kristof Bruyninckx <br />
            Pieter Verlinden
        </footer>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { IAuthState } from '../store/contract';

@Component({})
export default class Home extends Vue {
    @State('authStore')
    public authState!: IAuthState;

    public test: boolean = true;

    @Action
    public sendMessage!: (message: any) => void;

    public get firstName() {
        return (
            (this.authState &&
                this.authState.userState &&
                this.authState.userState.idTokenParsed.given_name) ||
            'NO USER LOGGED IN'
        );
    }
}
</script>
