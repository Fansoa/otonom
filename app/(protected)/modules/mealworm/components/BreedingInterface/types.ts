type Crate = {
  id: string;
  name: string;
  rack_id: string;
  stage_id: string | null;
};

export type CrateProps = {
  onClick: () => void;
  rackId: string;
  crateId: string;
};

type Rack = {
  crate: Crate[];
  created_at: Date;
  id: string;
  name: string;
  user_id: string;
};

export type RackProps = {
  rack: Rack;
};

export type BreedingInterfaceProps = {
  data: Rack[];
};
