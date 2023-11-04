"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function updataUser({ userId: String }): Promise<void> {
  connectToDB();

  await User.findOneAndUpdate({ id: userId });
}
//alamlar
