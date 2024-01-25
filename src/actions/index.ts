// This is optional but very recommendable to have
"use server";

import * as auth from "@/auth";

export async function signIn() {
    return auth.signIn('github');
}

export async function signOut() {
    return auth.signOut();
}