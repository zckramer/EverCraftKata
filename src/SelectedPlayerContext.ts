import { createContext } from 'react';
import { characterPlaceholder } from './placeholders/characterPlaceholder';
import { CharacterSheetType } from './types';

export const SelectedPlayerContext = createContext<CharacterSheetType>(characterPlaceholder);
