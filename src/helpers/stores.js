// @ts-nocheck
import {writable} from "svelte/store";

export const user = writable({});
export const isLoggedIn = writable(false);
export let color = writable("white");