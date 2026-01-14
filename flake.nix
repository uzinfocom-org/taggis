{
  description = "Uzinfocom PR Website";

  inputs = {
    # Nixpkgs
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    # The flake-parts library
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = {
    self,
    flake-parts,
    ...
  } @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} ({...}: {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      flake = {
        # Deployment module
        nixosModules.server = import ./module.nix self;
      };
      perSystem = {pkgs, ...}: {
        # Nix script formatter
        formatter = pkgs.alejandra;

        # Development environment
        devShells.default = import ./shell.nix self {inherit pkgs;};

        # Output package
        packages.default = pkgs.callPackage ./. {inherit pkgs;};
      };
    });
}
