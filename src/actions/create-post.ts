"use server";

import { z } from "zod";
import { db } from "@/db";
import { auth } from "@/auth";

interface CreatePostFormState {
    errors: {
        title?: string[],
        content?: string[]
    }
}

export async function createPost() {
    //TODO: Revalidate de topic show page
}