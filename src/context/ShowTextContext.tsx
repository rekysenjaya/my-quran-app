"use client";

import { createContext, useContext, useState, ReactNode, useLayoutEffect } from 'react';

import ContainerSuratLoading from '@/components/ContainerSuratLoading';

// Tipe untuk context
interface ShowTextContextType {
  showLatin: boolean;
  toggleShowLatin: (value: boolean) => void;
  showArti: boolean;
  toggleShowArti: (value: boolean) => void;
}

// Membuat context dengan default value
const ShowTextContext = createContext<ShowTextContextType | undefined>(undefined);

export function useShowText() {
  const context = useContext(ShowTextContext);
  if (!context) {
    throw new Error('useShowText must be used within a ShowTextProvider');
  }
  return context;
}

interface ShowTextProviderProps {
  children: ReactNode;
}

export function ShowTextProvider({ children }: ShowTextProviderProps) {
  // State untuk showLatin dan showArti, default false
  const [showLatin, setShowLatin] = useState<boolean>(false);
  const [showArti, setShowArti] = useState<boolean>(false);

  // State untuk menandakan apakah data sudah siap
  const [isReady, setIsReady] = useState<boolean>(false);

  // Mengambil data dari localStorage setelah komponen dimuat di client
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLatin = localStorage.getItem('showLatin');
      const savedArti = localStorage.getItem('showArti');

      // Set nilai berdasarkan localStorage
      if (savedLatin !== null) setShowLatin(JSON.parse(savedLatin));
      if (savedArti !== null) setShowArti(JSON.parse(savedArti));

      // Tandai bahwa data sudah siap dan render bisa dilakukan
      setIsReady(true);
    }
  }, []); // Dijalanin sekali setelah komponen pertama kali dimuat di klien

  const toggleShowLatin = (value: boolean) => {
    setShowLatin(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showLatin', JSON.stringify(value));
    }
  };

  const toggleShowArti = (value: boolean) => {
    setShowArti(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showArti', JSON.stringify(value));
    }
  };

  // Render loading atau komponen lain sebelum data siap
  if (!isReady) {
    return <ContainerSuratLoading />; // Anda bisa mengganti dengan komponen loading yang lebih baik
  }

  return (
    <ShowTextContext.Provider value={{ showLatin, toggleShowLatin, showArti, toggleShowArti }}>
      {children}
    </ShowTextContext.Provider>
  );
}
