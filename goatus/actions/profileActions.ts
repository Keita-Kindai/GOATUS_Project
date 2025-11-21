// src/actions/profileActions.ts
"use server";

import * as fs from 'fs/promises';
import * as path from 'path';

// JSONファイルのパスをプロジェクトルートから解決
const JSON_FILE_PATH = path.join(process.cwd(), 'localdata', 'profile.json');

interface ProfileData {
  accountName: string;
  residence: string;
  bio: string;
}

const DEFAULT_PROFILE_DATA: ProfileData = {
    accountName: "初期ユーザー",
    residence: "東京都",
    bio: "このデータはServer Actionによりファイルに書き込まれます。",
};

/**
 * プロフィールデータをファイルから読み込むサーバー関数
 */
export async function readProfileData(): Promise<ProfileData> {
  try {
    const data = await fs.readFile(JSON_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // ファイルが存在しない場合は、デフォルトデータで初期化して書き込む
      console.warn("Profile file not found. Initializing with default data and writing to file.");
      await saveProfileData(DEFAULT_PROFILE_DATA);
      return DEFAULT_PROFILE_DATA;
    }
    console.error("Failed to read profile data from file:", error);
    return DEFAULT_PROFILE_DATA;
  }
}

/**
 * プロフィールデータをファイルに直接書き込むサーバー関数
 */
export async function saveProfileData(data: ProfileData): Promise<{ success: boolean; message: string }> {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    // Node.jsのfsモジュールでファイルに直接書き込みます
    await fs.writeFile(JSON_FILE_PATH, jsonString, 'utf-8');
    
    return { 
      success: true, 
      message: `Profile saved successfully to ${JSON_FILE_PATH}` 
    };
  } catch (error) {
    console.error("Failed to write profile data to file:", error);
    return { success: false, message: "Failed to save profile data to file." };
  }
}