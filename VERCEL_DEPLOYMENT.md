# Vercel Deployment Guide for Sun Vault Exchange

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. GitHub repository with the project code
3. Environment variables configured

## Step-by-Step Deployment

### 1. Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository: `sun-vault-exchange`
4. Select the repository and click "Import"

### 2. Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in Vercel dashboard:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

### 3. Deploy Configuration

#### Vercel Configuration File
Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### 4. Domain Configuration

#### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued

#### Default Domain
- Vercel will provide a default domain: `https://sun-vault-exchange.vercel.app`
- This domain is immediately available after deployment

### 5. Environment-Specific Settings

#### Production Environment
- All environment variables are automatically available
- Build optimizations are enabled
- CDN distribution is active

#### Preview Environment
- Each branch gets its own preview URL
- Environment variables are inherited from production
- Perfect for testing before merging

### 6. Deployment Process

#### Automatic Deployment
1. Push code to `main` branch
2. Vercel automatically detects changes
3. Builds and deploys automatically
4. Sends deployment notifications

#### Manual Deployment
1. Go to project dashboard
2. Click "Deploy" button
3. Select branch to deploy
4. Monitor build logs

### 7. Post-Deployment Configuration

#### Analytics
1. Enable Vercel Analytics in project settings
2. Monitor performance metrics
3. Track user interactions

#### Monitoring
1. Set up error tracking
2. Configure alerts for build failures
3. Monitor deployment status

### 8. Troubleshooting

#### Common Issues

**Build Failures**
- Check environment variables are set correctly
- Verify all dependencies are in package.json
- Review build logs for specific errors

**Environment Variables Not Working**
- Ensure variables start with `VITE_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly

**Wallet Connection Issues**
- Verify WalletConnect Project ID is correct
- Check RPC URL is accessible
- Ensure chain ID matches expected network

#### Performance Optimization
- Enable Vercel's Edge Functions for better performance
- Configure caching headers for static assets
- Use Vercel's Image Optimization for better loading

### 9. Security Considerations

#### Environment Variables
- Never commit sensitive keys to repository
- Use Vercel's environment variable encryption
- Rotate keys regularly

#### HTTPS
- Vercel provides automatic HTTPS
- Custom domains get SSL certificates
- Force HTTPS redirects are enabled by default

### 10. Maintenance

#### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update environment variables as needed

#### Backup Strategy
- Code is backed up in GitHub
- Environment variables are stored in Vercel
- Consider database backups if applicable

## Deployment Checklist

- [ ] GitHub repository connected
- [ ] Environment variables configured
- [ ] Build settings verified
- [ ] Domain configured (if custom)
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Monitoring configured
- [ ] Performance optimized
- [ ] Security measures in place

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Contact Vercel support
4. Check GitHub repository for updates

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)